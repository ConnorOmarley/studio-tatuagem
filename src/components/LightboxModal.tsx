import { useEffect, useRef } from 'react';
import { X, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem, getWhatsAppUrl } from '../data/studioData.ts';

interface LightboxModalProps {
  items: PortfolioItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

const FOCAVEIS = 'a[href], button:not([disabled])';

export default function LightboxModal({ items, index, onClose, onChange }: LightboxModalProps) {
  const item = items[index];
  const janela = useRef<HTMLDivElement>(null);
  const botaoFechar = useRef<HTMLButtonElement>(null);

  // Ao abrir: trava a rolagem do fundo e leva o foco para dentro. Ao fechar: devolve o foco para a foto clicada.
  useEffect(() => {
    const quemAbriu = document.activeElement as HTMLElement | null;
    const rolagemAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    botaoFechar.current?.focus();
    return () => {
      document.body.style.overflow = rolagemAnterior;
      quemAbriu?.focus();
    };
  }, []);

  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && index > 0) onChange(index - 1);
      if (e.key === 'ArrowRight' && index < items.length - 1) onChange(index + 1);
      if (e.key === 'Tab' && janela.current) {
        const lista = Array.from(janela.current.querySelectorAll<HTMLElement>(FOCAVEIS));
        if (lista.length === 0) return;
        const primeiro = lista[0];
        const ultimo = lista[lista.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [index, items.length, onClose, onChange]);

  if (!item) return null;

  const mensagem = `Olá! Vi no site o trabalho "${item.title}" (${item.categoryLabel}, ${item.placement}) e gostaria de um orçamento com essa referência.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-tinta/90"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        ref={janela}
        className="relative w-full max-w-5xl max-h-[94vh] bg-papel text-tinta flex flex-col md:flex-row overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          ref={botaoFechar}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="anel-duplo absolute top-2 right-2 z-10 w-11 h-11 inline-flex items-center justify-center rounded-md bg-papel/90 hover:bg-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative md:w-3/5 bg-tinta flex items-center justify-center min-h-0">
          <img
            src={item.imageUrl}
            alt={item.title}
            width={item.width}
            height={item.height}
            className="max-h-[56vh] md:max-h-[94vh] w-auto max-w-full object-contain"
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => onChange(index - 1)}
              aria-label="Trabalho anterior"
              className="anel-duplo absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center rounded-md bg-papel/90 text-tinta hover:bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {index < items.length - 1 && (
            <button
              type="button"
              onClick={() => onChange(index + 1)}
              aria-label="Próximo trabalho"
              className="anel-duplo absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center rounded-md bg-papel/90 text-tinta hover:bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="md:w-2/5 p-5 sm:p-7 flex flex-col justify-between gap-6 overflow-y-auto">
          <div>
            <p className="text-sm text-grafite">
              {item.categoryLabel} · {item.placement}
            </p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold">{item.title}</h3>
            <p className="mt-4 text-base">{item.description}</p>
            <p className="mt-4 text-sm text-grafite">
              Imagem ilustrativa · {index + 1} de {items.length}
            </p>
          </div>

          <a
            href={getWhatsAppUrl(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            className="anel-duplo inline-flex items-center justify-center gap-2 min-h-12 px-5 rounded-md bg-azul text-white font-semibold hover:bg-azul-escuro transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            <span>Pedir orçamento com esta referência</span>
          </a>
        </div>
      </div>
    </div>
  );
}
