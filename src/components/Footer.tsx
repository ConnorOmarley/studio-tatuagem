import { STUDIO_INFO, getWhatsAppUrl } from '../data/studioData.ts';

const LINKS = [
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#estilos', label: 'Estilos' },
  { href: '#diferenciais', label: 'Por que escolher' },
  { href: '#localizacao', label: 'Como chegar' },
];

export default function Footer() {
  return (
    <footer className="faixa-escura bg-tinta text-papel">
      {/* Espaço extra embaixo no celular, para o botão flutuante não cobrir o texto */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-28 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          <div className="md:col-span-5">
            <p className="font-display text-3xl font-bold">Gravura Art Studio</p>
            <p className="mt-3 text-papel/75 max-w-sm">
              Estúdio de tatuagem no centro do Recife. Realismo preto e cinza, realismo colorido e criações autorais.
            </p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3">
            <ul>
              {LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex items-center min-h-11 hover:underline underline-offset-4">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4 text-papel/90">
            <p>Edifício Olímpia, R. do Hospício, 194, sala 101</p>
            <p>Boa Vista, Recife - PE</p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center min-h-11 font-semibold underline underline-offset-4 tabular-nums"
            >
              WhatsApp {STUDIO_INFO.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-papel/20 flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-papel/75">
          <p>© {new Date().getFullYear()} Gravura Art Studio</p>
          <p>Site de demonstração criado pela Impulso Tech</p>
        </div>
      </div>
    </footer>
  );
}
