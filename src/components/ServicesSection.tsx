import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData.ts';

const ESTILOS = [
  { titulo: 'Realismo preto e cinza', texto: 'Retratos, animais e cenas com luz e sombra suaves.' },
  { titulo: 'Realismo colorido e 3D', texto: 'Cores vivas e efeitos de volume, como olhos, borboletas e texturas.' },
  { titulo: 'Sketch e aquarela', texto: 'Traços soltos, hachuras e respingos, com ar de pintura.' },
  { titulo: 'Fine line e geek', texto: 'Linhas finas e silhuetas, com temas de anime, jogos e cinema.' },
  { titulo: 'Cobertura (cover-up)', texto: 'Estudo de uma tatuagem antiga para criar um desenho novo por cima.' },
  { titulo: 'Projeto autoral', texto: 'Desenho feito do zero, a partir da sua ideia.' },
];

const PASSOS = [
  { titulo: 'Conte sua ideia', texto: 'Mande no WhatsApp o que quer tatuar, o lugar do corpo, o tamanho e, se tiver, uma foto de referência.' },
  { titulo: 'Receba a estimativa', texto: 'O valor depende do tamanho, do nível de detalhe e do lugar do corpo.' },
  { titulo: 'Marque a sessão', texto: 'Vocês combinam o dia e o horário, e o desenho é preparado a partir da sua ideia.' },
  { titulo: 'Faça sua tatuagem', texto: 'Você é recebido no Edifício Olímpia, no centro do Recife.' },
];

const OPCOES_ESTILO = [...ESTILOS.map(e => e.titulo), 'Ainda não sei'];
const OPCOES_LOCAL = ['Braço ou antebraço', 'Perna ou panturrilha', 'Costas ou ombro', 'Peito ou costelas', 'Pescoço ou mão', 'Ainda não decidi'];
const OPCOES_TAMANHO = ['Pequena (até 10 cm)', 'Média (10 a 20 cm)', 'Grande ou fechamento'];

const CAMPO = 'w-full min-h-12 px-3 rounded-md border border-grafite bg-white text-base';

function Seletor({ id, rotulo, valor, opcoes, onChange }: {
  id: string; rotulo: string; valor: string; opcoes: string[]; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold mb-1.5">{rotulo}</label>
      <select id={id} value={valor} onChange={e => onChange(e.target.value)} className={CAMPO}>
        <option value="">Escolher</option>
        {opcoes.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function ServicesSection() {
  // Começa tudo vazio: a mensagem só leva o que a pessoa escolheu de verdade.
  const [estilo, setEstilo] = useState('');
  const [local, setLocal] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [ideia, setIdeia] = useState('');

  const linkWhatsApp = () => {
    const linhas = ['Olá! Gostaria de um orçamento para uma tatuagem.'];
    if (estilo) linhas.push(`• Estilo: ${estilo}`);
    if (local) linhas.push(`• Local do corpo: ${local}`);
    if (tamanho) linhas.push(`• Tamanho: ${tamanho}`);
    if (ideia.trim()) linhas.push(`• Minha ideia: ${ideia.trim()}`);
    return getWhatsAppUrl(linhas.join('\n'));
  };

  return (
    <section id="estilos" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Estilos</h2>
            <p className="mt-3 text-lg text-grafite max-w-[34rem]">
              Os estilos que aparecem nas fotos do estúdio. Se a sua ideia não se encaixa em nenhum, é só contar.
            </p>
            <ul className="mt-8">
              {ESTILOS.map(e => (
                <li key={e.titulo} className="border-t border-moldura py-5 sm:flex sm:gap-8">
                  <h3 className="font-display text-2xl sm:w-64 shrink-0">{e.titulo}</h3>
                  <p className="mt-1 sm:mt-0 text-grafite">{e.texto}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Como funciona</h2>
            <ol className="mt-8 space-y-7">
              {PASSOS.map((p, i) => (
                <li key={p.titulo} className="flex gap-5">
                  <span className="font-display text-5xl leading-none w-9 shrink-0" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl">{p.titulo}</h3>
                    <p className="mt-1 text-grafite">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20 border border-tinta bg-white p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Monte sua mensagem</h2>
            <p className="mt-3 text-grafite">Escolha só o que você já sabe. A mensagem abre pronta no WhatsApp.</p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Seletor id="estilo" rotulo="Estilo" valor={estilo} opcoes={OPCOES_ESTILO} onChange={setEstilo} />
              <Seletor id="local" rotulo="Parte do corpo" valor={local} opcoes={OPCOES_LOCAL} onChange={setLocal} />
              <Seletor id="tamanho" rotulo="Tamanho" valor={tamanho} opcoes={OPCOES_TAMANHO} onChange={setTamanho} />
            </div>
            <div className="mt-4">
              <label htmlFor="ideia" className="block text-base font-semibold mb-1.5">Sua ideia (opcional)</label>
              <input
                id="ideia"
                type="text"
                value={ideia}
                onChange={e => setIdeia(e.target.value)}
                placeholder="Ex.: um leão realista, uma homenagem à família"
                className={CAMPO}
              />
            </div>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 min-h-12 px-4 sm:px-6 rounded-md bg-azul text-white text-base sm:text-lg font-semibold hover:bg-azul-escuro transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Pedir orçamento no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
