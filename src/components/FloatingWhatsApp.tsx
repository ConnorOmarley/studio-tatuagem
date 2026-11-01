import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData.ts';

// Só no celular, e só depois do topo: lá o botão principal já está na tela.
// No computador o botão do cabeçalho cumpre esse papel.
export default function FloatingWhatsApp() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 700);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  if (!visivel) return null;

  return (
    <a
      href={getWhatsAppUrl('Olá! Vim pelo site da Gravura Art Studio e gostaria de tirar uma dúvida sobre tatuagem.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir orçamento no WhatsApp"
      className="anel-duplo md:hidden fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 min-h-12 px-5 rounded-full bg-azul text-white font-semibold border border-white/30 hover:bg-azul-escuro transition-colors"
    >
      <MessageCircle className="w-5 h-5" aria-hidden="true" />
      <span>Orçamento</span>
    </a>
  );
}
