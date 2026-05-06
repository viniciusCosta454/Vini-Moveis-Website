import { MessageCircle } from 'lucide-react';
import { business, logos } from '../data/siteData.js';
import { defaultWhatsAppMessage, whatsappLink } from '../utils/whatsapp.js';

export default function MobileAppTopBar() {
  return (
    <div className="fixed left-4 right-4 top-3 z-50 lg:hidden">
      <div className="mx-auto flex h-16 max-w-md items-center justify-between rounded-[2rem] border border-white/24 bg-vini-ink/58 px-3 text-vini-ivory shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
        <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Voltar ao início">
          <img
            src={logos.mark}
            alt={business.name}
            className="h-11 w-11 rounded-2xl border border-white/20 bg-vini-ink object-cover shadow-lg shadow-black/20"
            width="44"
            height="44"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-tight">{business.name}</span>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-vini-bronze">
              Curitiba
            </span>
          </span>
        </a>

        <a
          href={whatsappLink(defaultWhatsAppMessage)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/12 text-vini-ivory shadow-inner shadow-white/8 transition active:scale-95"
          aria-label="Falar no WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}
