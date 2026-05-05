import { ArrowUpRight } from 'lucide-react';
import { environments } from '../data/siteData.js';
import { defaultWhatsAppMessage, whatsappLink } from '../utils/whatsapp.js';
import OptimizedImage from './OptimizedImage.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Environments() {
  return (
    <section id="ambientes" className="bg-vini-ivory px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Ambientes"
            title="Móveis planejados para cada rotina da casa."
            description="Projetos completos para espaços amplos, compactos, residenciais ou comerciais, sempre com medidas, materiais e acabamentos definidos para o seu uso."
          />
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            className="group/link relative inline-flex items-center gap-2 pb-1 text-sm font-bold uppercase tracking-[0.18em] text-vini-wood transition hover:text-vini-ink after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-vini-wood after:transition-transform after:duration-300 hover:after:scale-x-100"
            target="_blank"
            rel="noreferrer"
          >
            Falar com a equipe
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {environments.map((environment) => (
            <article
              key={environment.title}
              className="reveal group overflow-hidden bg-vini-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="aspect-[4/3] overflow-hidden bg-vini-smoke">
                <OptimizedImage
                  image={environment.image}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-vini-ink">{environment.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-vini-charcoal/72">{environment.description}</p>
                <a
                  href={whatsappLink(
                    `Olá, vim pelo site e gostei do ambiente "${environment.title}". Gostaria de pedir um projeto parecido para móveis planejados.`,
                  )}
                  className="group/link relative mt-5 inline-flex items-center gap-2 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-vini-wood transition hover:text-vini-ink after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-vini-wood after:transition-transform after:duration-300 hover:after:scale-x-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir projeto parecido
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
