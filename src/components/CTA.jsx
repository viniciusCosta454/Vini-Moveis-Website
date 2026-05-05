import { MapPin, MessageCircle } from 'lucide-react';
import { business } from '../data/siteData.js';
import { whatsappLink } from '../utils/whatsapp.js';
import ButtonLink from './ButtonLink.jsx';

export default function CTA() {
  return (
    <section className="bg-vini-charcoal px-5 py-20 text-vini-ivory md:px-8 lg:py-24">
      <div className="reveal mx-auto flex max-w-7xl flex-col gap-9 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-vini-bronze">Vamos começar</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">Pronto para tirar seu projeto do papel?</h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            Fale com a Vini Móveis Planejados e comece hoje o planejamento do seu ambiente sob medida.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink
            href={whatsappLink('Olá, vim pelo site e gostaria de solicitar um orçamento para móveis planejados.')}
            icon={MessageCircle}
          >
            Solicitar orçamento pelo WhatsApp
          </ButtonLink>
          <ButtonLink href={business.mapsUrl} target="_blank" rel="noreferrer" variant="light" icon={MapPin}>
            Como chegar na loja
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
