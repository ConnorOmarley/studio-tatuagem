import { MessageCircle, Star } from 'lucide-react';
import { STUDIO_INFO, getWhatsAppUrl } from '../data/studioData.ts';

export default function HeroSection() {
  return (
    <section id="topo" className="pt-6 pb-16 sm:pt-12 lg:pt-16 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

        {/* A foto vem primeiro no celular: o trabalho é o que vende */}
        <figure className="lg:col-span-5 lg:order-last entrada-foto">
          <div className="border border-tinta bg-white p-2">
            <img
              src="/assets/aistudio/01_olho-reptil-antebraco_8384fa00.webp"
              alt="Tatuagem realista de um olho de réptil verde no antebraço"
              width={1200}
              height={1600}
              fetchPriority="high"
              className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/5] object-cover object-[50%_42%]"
            />
          </div>
          <figcaption className="mt-2 text-sm text-grafite">
            Realismo colorido · antebraço · imagem ilustrativa
          </figcaption>
        </figure>

        <div className="lg:col-span-7">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            Gravura Art Studio
          </h1>
          <p className="mt-4 text-xl sm:text-2xl leading-snug text-balance">
            Arte na pele, com cuidado e técnica refinada.
          </p>
          <p className="mt-4 max-w-[34rem] text-grafite">
            Estúdio de tatuagem no centro do Recife, com trabalhos em realismo preto e cinza, realismo colorido
            e criações autorais.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={getWhatsAppUrl('Olá! Vim pelo site da Gravura Art Studio e gostaria de conversar sobre uma tatuagem e pedir um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-md bg-azul text-white text-lg font-semibold hover:bg-azul-escuro transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Pedir orçamento no WhatsApp</span>
            </a>
            <a href="#trabalhos" className="inline-flex items-center min-h-12 text-azul font-semibold underline underline-offset-4">
              Ver os trabalhos
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-base">
            <Star className="w-4 h-4 fill-tinta text-tinta" aria-hidden="true" />
            <span>
              <strong className="font-semibold tabular-nums">{STUDIO_INFO.rating}</strong> no Google, com{' '}
              <span className="tabular-nums">{STUDIO_INFO.reviewsCount}</span> avaliações
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
