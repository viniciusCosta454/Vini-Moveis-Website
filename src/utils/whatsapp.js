const WHATSAPP_NUMBER = '554130399929';

export const defaultWhatsAppMessage =
  'Olá, vim pelo site e gostaria de fazer um orçamento para móveis planejados.';

export function whatsappLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
