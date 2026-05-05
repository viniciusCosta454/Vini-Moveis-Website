import { MessageCircle } from 'lucide-react';
import { defaultWhatsAppMessage, whatsappLink } from '../utils/whatsapp.js';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(defaultWhatsAppMessage)}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_38px_rgba(37,211,102,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_22px_52px_rgba(37,211,102,0.42)] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-vini-paper"
      aria-label="Falar com a Vini Móveis Planejados pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" strokeWidth={1.8} />
    </a>
  );
}
