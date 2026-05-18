import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { business, logos, navLinks } from '../data/siteData.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-vini-ink/10 bg-vini-linen px-5 py-14 text-vini-ink md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <a
            href="#inicio"
            className="inline-flex transition hover:opacity-80"
            aria-label={`${business.name} - voltar ao início`}
          >
            <img
              src={logos.wordmark}
              alt={business.name}
              className="h-20 w-auto max-w-[280px] object-contain"
              width="280"
              height="123"
            />
          </a>
          <p className="mt-6 max-w-sm text-sm leading-7 text-vini-charcoal/72">
            Projetos personalizados para cozinhas, dormitórios, banheiros, salas, escritórios e ambientes completos em Curitiba.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-vini-wood">Navegação</h2>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-vini-charcoal/72 transition hover:text-vini-wood">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-vini-wood">Contato</h2>
          <div className="mt-5 grid gap-4 text-sm text-vini-charcoal/72">
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-vini-wood">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 flex-none" />
              <span>{business.address}</span>
            </a>
            <a href="tel:+554130399929" className="flex gap-3 transition hover:text-vini-wood">
              <Phone aria-hidden="true" className="h-4 w-4 flex-none" />
              <span>{business.phone}</span>
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Vini Móveis Planejados"
              className="grid h-10 w-10 place-items-center rounded-full border border-vini-ink/15 text-vini-charcoal/72 transition hover:border-vini-wood hover:text-vini-wood"
            >
              <Instagram aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da Vini Móveis Planejados"
              className="grid h-10 w-10 place-items-center rounded-full border border-vini-ink/15 text-vini-charcoal/72 transition hover:border-vini-wood hover:text-vini-wood"
            >
              <Facebook aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-vini-ink/10 pt-6 text-xs text-vini-charcoal/58 md:flex-row md:items-center md:justify-between">
        <p>© {year} {business.name}. Todos os direitos reservados.</p>
        <p>Curitiba, Paraná</p>
      </div>
    </footer>
  );
}
