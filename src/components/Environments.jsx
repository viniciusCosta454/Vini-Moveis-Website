import { useState } from 'react';
import { ArrowUpRight, Images } from 'lucide-react';
import { environments } from '../data/siteData.js';
import { defaultWhatsAppMessage, whatsappLink } from '../utils/whatsapp.js';
import EnvironmentIdeasModal from './EnvironmentIdeasModal.jsx';
import OptimizedImage from './OptimizedImage.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Environments() {
  const [selectedEnvironment, setSelectedEnvironment] = useState(null);
  const [activeIdeaIndex, setActiveIdeaIndex] = useState(0);

  const openIdeas = (environment) => {
    setSelectedEnvironment(environment);
    setActiveIdeaIndex(0);
  };

  const closeIdeas = () => {
    setSelectedEnvironment(null);
  };

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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {environments.map((environment) => {
            const ideaCount = environment.ideas?.length ?? 1;
            const photoLabel = ideaCount === 1 ? '1 foto' : `${ideaCount} fotos`;

            return (
              <article
                key={environment.title}
                className="reveal group flex h-full flex-col overflow-hidden bg-vini-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <button
                  type="button"
                  onClick={() => openIdeas(environment)}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-vini-smoke text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-vini-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-vini-paper"
                  aria-label={`Ver ${photoLabel} para ${environment.title}`}
                >
                  <OptimizedImage
                    image={environment.image}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:blur-[2px] group-hover:brightness-75"
                  />
                  <span className="absolute left-4 top-4 border border-white/45 bg-vini-ink/64 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur">
                    {photoLabel}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center bg-vini-ink/44 opacity-100 backdrop-blur-[2px] transition-all duration-300 ease-out sm:opacity-0 sm:backdrop-blur-0 sm:group-hover:opacity-100 sm:group-hover:backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 border border-white/50 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur">
                      Ver galeria
                      <Images aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-vini-ink">{environment.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-vini-charcoal/72">{environment.description}</p>
                  <a
                    href={whatsappLink(
                      `Olá, vim pelo site e gostei do ambiente "${environment.title}". Gostaria de pedir um projeto parecido para móveis planejados.`,
                    )}
                    className="group/link relative mt-auto inline-flex items-center gap-2 self-start pb-1 pt-5 text-xs font-bold uppercase tracking-[0.18em] text-vini-wood transition hover:text-vini-ink after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-vini-wood after:transition-transform after:duration-300 hover:after:scale-x-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pedir projeto parecido
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <EnvironmentIdeasModal
        environment={selectedEnvironment}
        activeIndex={activeIdeaIndex}
        onChangeIndex={setActiveIdeaIndex}
        onClose={closeIdeas}
      />
    </section>
  );
}
