import { ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData.ts';

// Cada ponto vem das avaliações e da ficha pública do Google. Nada aqui é promessa do estúdio.
const MOTIVOS = [
  {
    titulo: 'Referência em Pernambuco',
    texto: 'Nas avaliações, o tatuador é descrito como talentoso e referência no estado. Há clientes que contam tatuar com ele há mais de dez anos.',
  },
  {
    titulo: 'Paciência durante a sessão',
    texto: 'As avaliações destacam a paciência do tatuador com quem sente dor ou está nervoso.',
  },
  {
    titulo: 'Ambiente limpo e organizado',
    texto: 'Quem já foi descreve um estúdio limpo, bem estruturado e com os materiais higienizados.',
  },
  {
    titulo: 'Prédio seguro, com elevador',
    texto: 'O Edifício Olímpia, na Rua do Hospício, tem porteiros e elevador até o 1º andar, onde fica a sala 101. Bom para quem tem dificuldade de locomoção.',
  },
  {
    titulo: 'Acolhe a comunidade LGBTQ+',
    texto: 'O Google mostra o estúdio como uma empresa que acolhe a comunidade LGBTQ+.',
  },
];

const AVALIACOES_URL = 'https://www.google.com/maps/place/Gravura+Art+Studio/@-8.0612799,-34.884062,17z';

export default function WhyChooseUs() {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 border-t border-moldura">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Por que escolher o estúdio</h2>
          <p className="mt-6 font-display text-7xl font-bold tabular-nums leading-none">{STUDIO_INFO.rating}</p>
          <p className="mt-2 text-lg">
            Nota no Google, em <span className="tabular-nums">{STUDIO_INFO.reviewsCount}</span> avaliações
          </p>
          <a
            href={AVALIACOES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 min-h-11 text-azul font-semibold underline underline-offset-4"
          >
            Ler as avaliações no Google
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-grafite max-w-xs">
            Resumo com palavras nossas, feito a partir das avaliações públicas.
          </p>
        </div>

        <ul className="lg:col-span-7">
          {MOTIVOS.map(m => (
            <li key={m.titulo} className="border-t border-moldura py-6 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-6">
              <h3 className="font-display text-2xl">{m.titulo}</h3>
              <p className="mt-2 text-grafite max-w-[34rem]">{m.texto}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
