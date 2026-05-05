import { Award, Factory, Handshake, LayoutGrid, Ruler, Sparkles } from 'lucide-react';
import { differentials } from '../data/siteData.js';
import SectionHeading from './SectionHeading.jsx';

const icons = {
  Award,
  Factory,
  Handshake,
  LayoutGrid,
  Ruler,
  Sparkles,
};

export default function Differentials() {
  return (
    <section className="bg-vini-ivory px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <SectionHeading
            align="center"
            eyebrow="Diferenciais"
            title="Por que escolher a Vini?"
            description="A combinação de experiência, fabricação própria e atendimento próximo faz diferença no resultado final do seu ambiente."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.title} className="reveal border border-vini-ink/10 bg-vini-paper p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-vini-ink text-vini-bronze">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-vini-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-vini-charcoal/72">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
