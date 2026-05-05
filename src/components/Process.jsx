import { processSteps } from '../data/siteData.js';
import SectionHeading from './SectionHeading.jsx';

export default function Process() {
  return (
    <section id="processo" className="bg-vini-paper px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <SectionHeading
            align="center"
            eyebrow="Processo"
            title="Do primeiro contato à instalação, tudo com clareza."
            description="Um projeto sob medida precisa de método. Por isso cada etapa é conduzida para que você entenda as escolhas, acompanhe a evolução e receba um ambiente pronto para usar."
          />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="reveal border border-vini-ink/10 bg-vini-ivory p-7 shadow-sm">
              <span className="font-display text-5xl leading-none text-vini-bronze">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-vini-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-vini-charcoal/72">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
