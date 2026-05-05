import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { aboutHighlights, aboutImage, business } from '../data/siteData.js';
import { whatsappLink } from '../utils/whatsapp.js';
import ButtonLink from './ButtonLink.jsx';
import OptimizedImage from './OptimizedImage.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="quem-somos" className="bg-vini-paper px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="reveal">
          <SectionHeading
            eyebrow="Quem somos"
            title="Uma empresa familiar para projetos que precisam durar."
            description="A Vini Móveis Planejados fica em Curitiba e cria móveis sob medida para casas, apartamentos, escritórios e espaços comerciais. O trabalho combina escuta próxima, projeto personalizado e fabricação própria para entregar ambientes bonitos, funcionais e bem acabados."
          />

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-vini-ink/10 py-3">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 flex-none text-vini-wood" strokeWidth={1.8} />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-vini-charcoal/82">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href={whatsappLink('Olá, vim pelo site e gostaria de agendar uma visita ao showroom da Vini Móveis Planejados.')}
              variant="dark"
              icon={ArrowUpRight}
            >
              Agende uma visita ao showroom
            </ButtonLink>
          </div>
        </div>

        <figure className="reveal relative">
          <div className="aspect-[4/5] overflow-hidden bg-vini-smoke shadow-soft">
            <OptimizedImage image={aboutImage} className="h-full w-full object-cover" />
          </div>
          <figcaption className="absolute bottom-6 left-6 right-6 border border-white/24 bg-vini-ink/82 p-5 text-vini-ivory backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-vini-bronze">Desde 2008</p>
            <p className="mt-2 text-sm leading-6 text-white/78">
              Projetos sob medida com fabricação própria, atenção aos detalhes e presença próxima em cada etapa.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
