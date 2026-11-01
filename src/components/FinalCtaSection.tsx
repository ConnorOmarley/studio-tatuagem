import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO, getWhatsAppUrl } from '../data/studioData.ts';

export default function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 border-t border-moldura">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="max-w-3xl text-4xl sm:text-5xl font-bold text-balance">
          Vamos conversar sobre a sua tatuagem?
        </h2>
        <p className="mt-4 max-w-[34rem] text-lg text-grafite">
          Envie a sua ideia ou uma foto de referência pelo WhatsApp.
        </p>
        <a
          href={getWhatsAppUrl('Olá! Gostaria de tirar dúvidas e solicitar um orçamento para minha tatuagem.')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-md bg-azul text-white text-lg font-semibold hover:bg-azul-escuro transition-colors"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span>Pedir orçamento no WhatsApp</span>
        </a>
        <p className="mt-3 text-grafite tabular-nums">{STUDIO_INFO.phoneDisplay}</p>
      </div>
    </section>
  );
}
