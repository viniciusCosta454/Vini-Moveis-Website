import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '../utils/whatsapp.js';
import OptimizedImage from './OptimizedImage.jsx';

const getWrappedIndex = (index, length) => (index + length) % length;

export default function EnvironmentIdeasModal({ environment, activeIndex, onChangeIndex, onClose }) {
  const ideas = environment?.ideas?.length
    ? environment.ideas
    : environment
      ? [
          {
            title: environment.title,
            description: environment.description,
            image: environment.image,
          },
        ]
      : [];

  const currentIndex = ideas.length ? getWrappedIndex(activeIndex, ideas.length) : 0;
  const activeIdea = ideas[currentIndex];
  const hasMultipleIdeas = ideas.length > 1;

  useEffect(() => {
    if (!environment || !ideas.length) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft' && hasMultipleIdeas) {
        onChangeIndex(getWrappedIndex(currentIndex - 1, ideas.length));
      }

      if (event.key === 'ArrowRight' && hasMultipleIdeas) {
        onChangeIndex(getWrappedIndex(currentIndex + 1, ideas.length));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, environment, hasMultipleIdeas, ideas.length, onChangeIndex, onClose]);

  if (!environment || !activeIdea) {
    return null;
  }

  const goToPrevious = () => {
    onChangeIndex(getWrappedIndex(currentIndex - 1, ideas.length));
  };

  const goToNext = () => {
    onChangeIndex(getWrappedIndex(currentIndex + 1, ideas.length));
  };

  const quoteMessage = `Olá, vim pelo site e gostei do modelo "${activeIdea.title}" em ${environment.title}. Gostaria de falar com uma projetista e fazer um orçamento para um projeto parecido.`;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-vini-ink/84 px-4 py-5 text-vini-ink backdrop-blur-md sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="environment-ideas-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Fechar galeria de ideias"
        onClick={onClose}
      />

      <div className="relative z-10 grid max-h-[calc(100svh-2rem)] w-full max-w-6xl overflow-hidden bg-vini-ivory shadow-[0_34px_90px_rgba(0,0,0,0.38)] lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
        <button
          type="button"
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-vini-ink/70 text-white shadow-lg shadow-black/20 transition hover:bg-vini-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Fechar galeria"
          onClick={onClose}
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>

        <div className="relative min-h-[320px] bg-vini-ink p-3 sm:p-4 lg:min-h-[620px]">
          <div className="relative h-full min-h-[320px] overflow-hidden bg-vini-charcoal">
            <OptimizedImage
              image={activeIdea.image}
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="h-full w-full object-cover transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vini-ink/64 via-vini-ink/8 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/72">
                  Modelo {currentIndex + 1} de {ideas.length}
                </p>
                <h3 className="mt-2 font-display text-3xl text-vini-ivory md:text-4xl">{activeIdea.title}</h3>
              </div>
            </div>

            {hasMultipleIdeas && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-vini-ink/64 text-white shadow-lg shadow-black/20 transition hover:-translate-y-[54%] hover:bg-vini-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Ver ideia anterior"
                >
                  <ChevronLeft aria-hidden="true" className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-vini-ink/64 text-white shadow-lg shadow-black/20 transition hover:-translate-y-[54%] hover:bg-vini-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Ver próxima ideia"
                >
                  <ChevronRight aria-hidden="true" className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex max-h-[calc(100svh-2rem)] flex-col overflow-y-auto p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-vini-wood">Ideias para</p>
          <h2 id="environment-ideas-title" className="mt-3 font-display text-4xl text-vini-ink">
            {environment.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-vini-charcoal/72">{environment.description}</p>

          <div className="mt-7 border-y border-vini-ink/10 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-vini-bronze">Modelo selecionado</p>
            <h3 className="mt-3 text-2xl font-semibold text-vini-ink">{activeIdea.title}</h3>
            <p className="mt-3 text-sm leading-7 text-vini-charcoal/72">{activeIdea.description}</p>
          </div>

          <div className="mt-7 flex flex-col gap-3 lg:mt-auto">
            <a
              href={whatsappLink(quoteMessage)}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-vini-bronze px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-vini-ink shadow-[0_12px_28px_rgba(176,138,87,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-vini-caramel hover:shadow-[0_18px_42px_rgba(176,138,87,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-vini-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-vini-ivory"
              target="_blank"
              rel="noreferrer"
            >
              Gostei desse modelo
              <MessageCircle aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-vini-ink/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-vini-ink transition hover:-translate-y-0.5 hover:border-vini-bronze hover:text-vini-wood focus:outline-none focus-visible:ring-2 focus-visible:ring-vini-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-vini-ivory"
            >
              Fechar galeria
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
