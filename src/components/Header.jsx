import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { business, logos, navLinks } from '../data/siteData.js';
import { defaultWhatsAppMessage, whatsappLink } from '../utils/whatsapp.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 hidden border-b border-vini-bronze/20 bg-vini-ink/95 text-vini-ivory shadow-xl shadow-black/10 backdrop-blur transition duration-300 lg:block"
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-7 px-5 md:px-8 lg:justify-center"
        aria-label="Menu principal"
      >
        <a href="#inicio" className="flex shrink-0 items-center" onClick={() => setIsOpen(false)}>
          <img
            src={logos.mark}
            alt={business.name}
            className="h-[52px] w-[52px] rounded-2xl border border-vini-bronze/55 bg-vini-ink object-cover shadow-lg shadow-black/20"
            width="52"
            height="52"
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-xs font-semibold uppercase tracking-[0.14em] text-current/78 transition hover:text-vini-bronze after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-vini-bronze after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 border-l border-current/15 pl-7 lg:flex">
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-vini-bronze px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-vini-ink shadow-[0_10px_24px_rgba(22,20,17,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-vini-caramel hover:shadow-[0_16px_34px_rgba(176,138,87,0.3)] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-vini-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-vini-ink"
          >
            Solicitar orçamento
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-current lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-vini-bronze/15 bg-vini-ink transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-5 py-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-vini-ivory/80 transition hover:bg-white/6 hover:text-vini-bronze"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            className="group mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-vini-bronze px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-vini-ink shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-vini-caramel hover:shadow-[0_16px_34px_rgba(176,138,87,0.3)] active:translate-y-0"
            onClick={() => setIsOpen(false)}
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
