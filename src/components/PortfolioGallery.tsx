import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem, getWhatsAppUrl } from '../data/studioData.ts';
import LightboxModal from './LightboxModal.tsx';

type Filtro = 'todos' | PortfolioItem['category'];

const FILTROS: { id: Filtro; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'realismo-pb', label: 'Preto e cinza' },
  { id: 'realismo-cor', label: 'Colorido e 3D' },
  { id: 'sketch', label: 'Sketch e aquarela' },
  { id: 'geek-linhas', label: 'Geek e linhas' },
  { id: 'estudio', label: 'Estúdio' },
];

const PRIMEIRAS = 6;

export default function PortfolioGallery() {
  const [filtro, setFiltro] = useState<Filtro>('todos');
  const [verTodas, setVerTodas] = useState(false);
  const [aberto, setAberto] = useState<number | null>(null);

  const filtradas = filtro === 'todos' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.category === filtro);
  const visiveis = verTodas ? filtradas : filtradas.slice(0, PRIMEIRAS);

  useEffect(() => {
    setVerTodas(false);
  }, [filtro]);

  return (
    <section id="trabalhos" className="faixa-escura bg-tinta text-papel py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Trabalhos</h2>
          <p className="mt-3 text-papel/75 text-lg">
            Fotos de tatuagens feitas no estúdio. Toque em uma foto para ampliar.
          </p>
        </div>

        <div className="mt-8 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto overflow-y-hidden border-b border-papel/20" role="group" aria-label="Filtrar por estilo">
          <div className="flex gap-1 w-max">
            {FILTROS.map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFiltro(f.id)}
                aria-pressed={filtro === f.id}
                className={`min-h-11 px-3 text-base whitespace-nowrap border-b-2 -mb-px transition-colors ${
                  filtro === f.id
                    ? 'border-papel text-papel font-semibold'
                    : 'border-transparent text-papel/70 hover:text-papel'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Mostrando {visiveis.length} de {filtradas.length} trabalhos
        </p>

        {/* Cada foto mantém a proporção original: nada de corte uniforme */}
        <ul className="mt-8 columns-2 lg:columns-3 gap-3 sm:gap-6">
          {visiveis.map(item => (
            <li key={item.id} className="break-inside-avoid mb-6 sm:mb-8">
              <button
                type="button"
                onClick={() => setAberto(filtradas.findIndex(i => i.id === item.id))}
                className="block w-full text-left group"
                aria-label={`Ampliar: ${item.title}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto border border-papel/25 group-hover:border-papel transition-colors"
                />
                <span className="mt-2 block font-display text-lg sm:text-xl leading-tight">{item.title}</span>
                <span className="mt-1 block text-sm text-papel/70">
                  {item.categoryLabel} · {item.placement}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {filtradas.length > PRIMEIRAS && !verTodas && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setVerTodas(true)}
              className="inline-flex items-center justify-center min-h-12 px-6 rounded-md border border-papel text-papel font-semibold hover:bg-papel hover:text-tinta transition-colors"
            >
              Ver os outros {filtradas.length - PRIMEIRAS} trabalhos
            </button>
          </div>
        )}

        <div className="mt-14 pt-8 border-t border-papel/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold">Tem uma ideia ou uma foto de referência?</h3>
            <p className="mt-2 text-papel/75">Envie pelo WhatsApp para conversar sobre tamanho, local do corpo e orçamento.</p>
          </div>
          <a
            href={getWhatsAppUrl('Olá! Gostaria de mandar uma foto de referência para saber a opinião e o orçamento para minha tattoo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-md bg-papel text-tinta font-semibold hover:bg-white transition-colors shrink-0"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            <span>Enviar minha referência</span>
          </a>
        </div>
      </div>

      {aberto !== null && (
        <LightboxModal items={filtradas} index={aberto} onClose={() => setAberto(null)} onChange={setAberto} />
      )}
    </section>
  );
}
