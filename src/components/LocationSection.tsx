import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { STUDIO_INFO, getWhatsAppUrl } from '../data/studioData.ts';

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio+Ol%C3%ADmpia+Rua+do+Hosp%C3%ADcio+194+Boa+Vista+Recife';

export default function LocationSection() {
  const [copiado, setCopiado] = useState(false);

  const copiarEndereco = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_INFO.fullAddressString);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      // Sem permissão para copiar: o endereço continua visível na tela.
    }
  };

  const { address } = STUDIO_INFO;

  return (
    <section id="localizacao" className="py-16 sm:py-24 border-t border-moldura">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Como chegar</h2>

          <address className="mt-6 not-italic">
            <p className="font-display text-2xl">{address.building}</p>
            <p className="mt-1 text-lg">{address.street}, {address.complement}</p>
            <p className="text-grafite">{address.neighborhood}, {address.city} - {address.state}, CEP {address.zipCode}</p>
          </address>

          <p className="mt-3 text-grafite">Prédio com porteiros e elevador.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copiarEndereco}
              className="inline-flex items-center gap-2 min-h-11 px-4 rounded-md border border-tinta font-semibold hover:bg-tinta hover:text-papel transition-colors"
            >
              {copiado ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
              <span>{copiado ? 'Endereço copiado' : 'Copiar endereço'}</span>
            </button>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-11 px-4 rounded-md border border-tinta font-semibold hover:bg-tinta hover:text-papel transition-colors"
            >
              <span>Abrir no Maps</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-moldura">
            <h3 className="font-display text-2xl">Horários</h3>
            <p className="mt-2 text-grafite">
              Combine o dia e o horário pelo WhatsApp{' '}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-azul underline underline-offset-4 tabular-nums whitespace-nowrap"
              >
                {STUDIO_INFO.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-tinta bg-white p-2">
            <iframe
              title="Mapa do Gravura Art Studio, Edifício Olímpia, Recife"
              src="https://maps.google.com/maps?q=Rua%20do%20Hospicio,%20194,%20Boa%20Vista,%20Recife%20PE&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full aspect-[4/3] lg:aspect-[16/11] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
