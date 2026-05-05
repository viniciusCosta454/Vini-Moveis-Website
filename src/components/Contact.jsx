import { useState } from 'react';
import { Clock, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { business } from '../data/siteData.js';
import { whatsappLink } from '../utils/whatsapp.js';
import SectionHeading from './SectionHeading.jsx';

const initialForm = {
  name: '',
  phone: '',
  environment: 'Cozinha planejada',
  message: '',
};

const environments = [
  'Cozinha planejada',
  'Dormitório',
  'Closet',
  'Banheiro ou lavabo',
  'Lavanderia',
  'Home office',
  'Sala de TV',
  'Studio ou apartamento completo',
  'Ambiente comercial',
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = [
      'Olá, vim pelo site e gostaria de fazer um orçamento para móveis planejados.',
      form.name ? `Meu nome é ${form.name}.` : '',
      form.phone ? `Meu telefone é ${form.phone}.` : '',
      form.environment ? `Tenho interesse em: ${form.environment}.` : '',
      form.message ? `Mensagem: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
    setForm(initialForm);
  };

  return (
    <section id="contato" className="bg-vini-ivory px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <SectionHeading
            eyebrow="Contato"
            title="Visite a loja ou chame pelo WhatsApp."
            description="Conte qual ambiente você quer transformar. A equipe da Vini ajuda a entender medidas, estilo, acabamento e o melhor caminho para o orçamento."
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal space-y-5">
            <div className="border border-vini-ink/10 bg-vini-paper p-6">
              <div className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-vini-wood" strokeWidth={1.8} />
                <div>
                  <h3 className="font-semibold text-vini-ink">Endereço</h3>
                  <p className="mt-2 text-sm leading-7 text-vini-charcoal/75">{business.address}</p>
                </div>
              </div>
            </div>
            <div className="border border-vini-ink/10 bg-vini-paper p-6">
              <div className="flex gap-4">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-vini-wood" strokeWidth={1.8} />
                <div>
                  <h3 className="font-semibold text-vini-ink">Telefone e WhatsApp</h3>
                  <a className="mt-2 block text-sm leading-7 text-vini-charcoal/75 transition hover:text-vini-wood" href="tel:+554130399929">
                    {business.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-vini-ink/10 bg-vini-paper p-6">
              <div className="flex gap-4">
                <Clock aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-vini-wood" strokeWidth={1.8} />
                <div>
                  <h3 className="font-semibold text-vini-ink">Horário de atendimento</h3>
                  <p className="mt-2 text-sm leading-7 text-vini-charcoal/75">{business.hours}</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-vini-ink/10 bg-vini-smoke">
              <iframe
                title="Mapa da Vini Móveis Planejados"
                src={business.mapsEmbed}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal bg-vini-paper p-6 shadow-soft md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-vini-ink">
                Nome
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  autoComplete="name"
                  className="min-h-12 border border-vini-ink/12 bg-vini-ivory px-4 text-vini-ink outline-none transition focus:border-vini-bronze"
                  placeholder="Seu nome"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-vini-ink">
                Telefone/WhatsApp
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateForm}
                  autoComplete="tel"
                  className="min-h-12 border border-vini-ink/12 bg-vini-ivory px-4 text-vini-ink outline-none transition focus:border-vini-bronze"
                  placeholder="(41) 99999-9999"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-vini-ink">
              Tipo de ambiente
              <select
                name="environment"
                value={form.environment}
                onChange={updateForm}
                className="min-h-12 border border-vini-ink/12 bg-vini-ivory px-4 text-vini-ink outline-none transition focus:border-vini-bronze"
              >
                {environments.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-vini-ink">
              Mensagem
              <textarea
                name="message"
                value={form.message}
                onChange={updateForm}
                rows="6"
                className="resize-y border border-vini-ink/12 bg-vini-ivory px-4 py-3 text-vini-ink outline-none transition focus:border-vini-bronze"
                placeholder="Conte um pouco sobre o ambiente, medidas aproximadas ou prazo desejado."
              />
            </label>

            <button
              type="submit"
              className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-vini-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-vini-ivory shadow-[0_12px_30px_rgba(22,20,17,0.16)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-vini-charcoal hover:shadow-[0_18px_42px_rgba(22,20,17,0.28)] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-vini-ink focus-visible:ring-offset-2 focus-visible:ring-offset-vini-paper sm:w-auto"
            >
              Enviar pelo WhatsApp
              <Send aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-vini-charcoal/65">
              <MessageCircle aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-vini-wood" />
              Ao enviar, abriremos o WhatsApp com a mensagem preenchida para você revisar antes de mandar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
