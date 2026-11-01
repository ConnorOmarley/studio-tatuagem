import { useEffect, useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData.ts';

const LINKS = [
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#estilos', label: 'Estilos' },
  { href: '#diferenciais', label: 'Por que escolher' },
  { href: '#localizacao', label: 'Como chegar' },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (!menuAberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuAberto(false);
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [menuAberto]);

  return (
    <header className="sticky top-0 z-40 w-full bg-papel/95 backdrop-blur border-b border-moldura">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <a href="#topo" className="flex items-baseline gap-2 shrink-0 min-h-11 items-center">
          <span className="font-display text-2xl font-bold tracking-tight">Gravura</span>
          <span className="text-sm text-grafite">Art Studio</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-8 text-base">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="py-3 hover:text-azul underline-offset-4 hover:underline">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de tirar dúvidas sobre tatuagem e fazer um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 min-h-11 px-5 rounded-md bg-azul text-white text-base font-semibold hover:bg-azul-escuro transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Pedir orçamento</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuAberto(v => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md hover:bg-moldura/60"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            aria-controls="menu-celular"
          >
            {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav id="menu-celular" aria-label="Menu" className="lg:hidden border-t border-moldura bg-papel px-4 pb-4">
          <ul>
            {LINKS.map(l => (
              <li key={l.href} className="border-b border-moldura">
                <a
                  href={l.href}
                  onClick={() => setMenuAberto(false)}
                  className="flex items-center min-h-12 text-lg font-display"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={getWhatsAppUrl('Olá! Gostaria de tirar dúvidas sobre tatuagem e fazer um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAberto(false)}
            className="mt-4 flex items-center justify-center gap-2 min-h-12 rounded-md bg-azul text-white font-semibold hover:bg-azul-escuro transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            <span>Pedir orçamento no WhatsApp</span>
          </a>
        </nav>
      )}
    </header>
  );
}
