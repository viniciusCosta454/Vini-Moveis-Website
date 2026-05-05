import { ArrowDown, MessageCircle } from 'lucide-react';
import { business, heroImage, trustBadges } from '../data/siteData.js';
import { defaultWhatsAppMessage, whatsappLink } from '../utils/whatsapp.js';
import ButtonLink from './ButtonLink.jsx';
import OptimizedImage from './OptimizedImage.jsx';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[88svh] items-center overflow-hidden bg-vini-ink text-white lg:min-h-[92svh]">
      <div className="absolute inset-0">
        <OptimizedImage
          image={heroImage}
          priority
          sizes="100vw"
          className="h-full w-full scale-[1.03] object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-vini-ink/72" />
        <div className="absolute inset-x-0 top-0 bottom-44 bg-vini-ink/45" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-vini-ink/45" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 lg:pb-20 lg:pt-40">
        <div className="max-w-4xl reveal">
          <p className="mb-7 inline-flex max-w-full border border-white/42 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-vini-ivory shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:text-base md:px-5 md:py-3 md:text-lg md:tracking-[0.22em]">
            {business.name}
          </p>
          <h1 className="font-display text-5xl leading-[0.98] text-vini-ivory md:text-7xl lg:text-8xl">
            Móveis planejados sob medida em Curitiba
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Ambientes planejados para transformar sua casa em um projeto único. Desde 2008,
            criamos móveis sob medida com design, funcionalidade e fabricação própria.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={whatsappLink(defaultWhatsAppMessage)} icon={MessageCircle}>
              Falar no WhatsApp
            </ButtonLink>
            <ButtonLink href="#ambientes" variant="secondary" icon={ArrowDown}>
              Conhecer ambientes
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="reveal border border-white/18 bg-white/9 px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/86 backdrop-blur"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
