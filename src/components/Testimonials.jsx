import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from 'lucide-react';
import { business, testimonials } from '../data/siteData.js';
import ButtonLink from './ButtonLink.jsx';
import SectionHeading from './SectionHeading.jsx';

const getWrappedIndex = (index) => (index + testimonials.length) % testimonials.length;
const carouselAnimationDuration = 520;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [isTrackResetting, setIsTrackResetting] = useState(false);
  const animationTimeout = useRef(null);

  const carouselItems = [
    { position: 'buffer-left', testimonial: testimonials[getWrappedIndex(activeIndex - 2)] },
    { position: 'left', testimonial: testimonials[getWrappedIndex(activeIndex - 1)] },
    { position: 'center', testimonial: testimonials[activeIndex] },
    { position: 'right', testimonial: testimonials[getWrappedIndex(activeIndex + 1)] },
    { position: 'buffer-right', testimonial: testimonials[getWrappedIndex(activeIndex + 2)] },
  ];

  useEffect(() => {
    return () => {
      if (animationTimeout.current) {
        window.clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  const moveCarousel = (direction) => {
    if (animationTimeout.current) {
      return;
    }

    setAnimationDirection(direction);

    animationTimeout.current = window.setTimeout(() => {
      setIsTrackResetting(true);
      setActiveIndex((current) => getWrappedIndex(current + (direction === 'next' ? 1 : -1)));
      setAnimationDirection(null);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTrackResetting(false);
          animationTimeout.current = null;
        });
      });
    }, carouselAnimationDuration);
  };

  const goToPrevious = () => {
    moveCarousel('previous');
  };

  const goToNext = () => {
    moveCarousel('next');
  };

  return (
    <section id="depoimentos" className="overflow-hidden bg-vini-paper px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <SectionHeading
            align="center"
            eyebrow="Depoimentos"
            title="Avaliações reais de clientes da Vini."
            description="Relatos de quem confiou seus ambientes à nossa equipe, com atenção ao projeto, ao acabamento e à instalação."
          />
        </div>

        <div className="reveal mt-12">
          <div
            className="testimonial-carousel -my-8 overflow-hidden py-8"
            data-direction={animationDirection ?? 'idle'}
            data-resetting={isTrackResetting ? 'true' : 'false'}
            aria-live="polite"
          >
            <div className="testimonial-stage">
              {carouselItems.map(({ position, testimonial }) => {
                const isCenter = position === 'center';

                return (
                  <article
                    key={`${position}-${testimonial.name}`}
                    className={`testimonial-card testimonial-card--${position} bg-vini-ivory p-7 md:p-9`}
                    aria-hidden={isCenter ? undefined : 'true'}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <Quote aria-hidden="true" className="h-9 w-9 text-vini-bronze" strokeWidth={1.6} />
                      <div className="flex gap-1 text-vini-bronze" aria-label="Avaliação 5 estrelas">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current" strokeWidth={1.4} />
                        ))}
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-8 text-vini-charcoal/78 md:text-lg md:leading-9">
                      "{testimonial.quote}"
                    </p>

                    <div className="mt-auto border-t border-vini-ink/10 pt-5">
                      <p className="text-lg font-semibold text-vini-ink">{testimonial.name}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-vini-wood">
                        {testimonial.project}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-vini-charcoal/45">
                        Avaliação no Google
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={Boolean(animationDirection) || isTrackResetting}
                className="grid h-12 w-12 place-items-center rounded-full border border-vini-ink/15 text-vini-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-vini-bronze hover:text-vini-wood hover:shadow-[0_14px_32px_rgba(22,20,17,0.1)] disabled:pointer-events-none disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-vini-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-vini-paper"
                aria-label="Ver avaliação anterior"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                disabled={Boolean(animationDirection) || isTrackResetting}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-vini-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-vini-ivory shadow-[0_12px_30px_rgba(22,20,17,0.16)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-vini-charcoal hover:shadow-[0_18px_42px_rgba(22,20,17,0.28)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-vini-ink focus-visible:ring-offset-2 focus-visible:ring-offset-vini-paper"
              >
                Próxima avaliação
                <ChevronRight aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <ButtonLink href={business.googleReviewsUrl} target="_blank" rel="noreferrer" variant="outline" icon={ExternalLink}>
              Ver mais avaliações no Google
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
