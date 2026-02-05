import { useState } from 'react';
import type { FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Indirizzo',
    content: 'Via Regina Margherita 143\n66010 Villamagna (CH)',
    link: 'https://maps.google.com/?q=Via+Regina+Margherita+143+Villamagna+CH',
  },
  {
    icon: Phone,
    title: 'Telefono',
    content: '0871 300660\n338 285 0673',
    link: 'tel:+393382850673',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@tuttolegno-chieti.it',
    link: 'mailto:info@tuttolegno-chieti.it',
  },
  {
    icon: Clock,
    title: 'Orari',
    content: 'Lun - Ven: 08:00 - 19:00\nSab - Dom: Chiuso',
    link: null,
  },
];

const serviceOptions = [
  'Mobili su misura',
  'Cucina in legno',
  'Restauro mobili',
  'Porte e finestre',
  'Strutture esterne',
  'Altro',
];

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    servizio: '',
    messaggio: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulazione invio form
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form dopo 3 secondi
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        servizio: '',
        messaggio: '',
        privacy: false,
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-wood-dark to-wood-medium">
        <div className="container-custom mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <span className="text-accent-gold font-medium mb-2 block">Contatti</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Parliamo del Tuo Progetto
            </h1>
            <p className="text-wood-cream/80 text-lg max-w-2xl mx-auto">
              Hai un'idea da realizzare? Contattaci per una consulenza gratuita. 
              Saremo felici di ascoltarti e proporti la soluzione migliore.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} animation="fade-up" delay={index * 100}>
                <div className="card p-6 text-center h-full">
                  <div className="w-14 h-14 bg-wood-beige rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon size={28} className="text-wood-warm" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-wood-dark mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-wood-medium hover:text-accent-gold transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-wood-medium whitespace-pre-line">{info.content}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="section-padding bg-wood-beige">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal animation="slide-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-heading text-2xl font-bold text-wood-dark mb-2">
                  Richiedi un Preventivo
                </h2>
                <p className="text-wood-medium mb-8">
                  Compila il form e ti ricontatteremo entro 24 ore.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={48} className="text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-wood-dark mb-2">
                      Messaggio Inviato!
                    </h3>
                    <p className="text-wood-medium">
                      Ti ricontatteremo al più presto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="nome"
                          className="block text-sm font-medium text-wood-dark mb-2"
                        >
                          Nome e Cognome *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-colors"
                          placeholder="Mario Rossi"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-sm font-medium text-wood-dark mb-2"
                        >
                          Telefono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-colors"
                          placeholder="+39 333 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-wood-dark mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-colors"
                        placeholder="mario.rossi@email.it"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="servizio"
                        className="block text-sm font-medium text-wood-dark mb-2"
                      >
                        Servizio di Interesse
                      </label>
                      <select
                        id="servizio"
                        name="servizio"
                        value={formData.servizio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-colors bg-white"
                      >
                        <option value="">Seleziona un servizio</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="messaggio"
                        className="block text-sm font-medium text-wood-dark mb-2"
                      >
                        Messaggio *
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        value={formData.messaggio}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-colors resize-none"
                        placeholder="Descrivi il tuo progetto o la tua richiesta..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-wood-warm focus:ring-accent-gold"
                      />
                      <label htmlFor="privacy" className="text-sm text-wood-medium">
                        Ho letto e accetto la{' '}
                        <a href="#" className="text-accent-gold hover:underline">
                          Privacy Policy
                        </a>
                        . Acconsento al trattamento dei miei dati personali. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Invia Richiesta
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Map & Quick Contact */}
            <ScrollReveal animation="slide-right">
              <div className="space-y-6">
                {/* Map placeholder */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d14.2!3d42.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDIxJzAwLjAiTiAxNMKwMTInMDAuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa Tutto Legno - Villamagna"
                    className="w-full"
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-wood-dark mb-2">
                      Come Raggiungerci
                    </h3>
                    <p className="text-wood-medium text-sm">
                      Il nostro laboratorio si trova a Villamagna, in Via Regina Margherita 143. 
                      Facilmente raggiungibile dalla SS5 Tiburtina Valeria.
                    </p>
                    <a
                      href="https://maps.google.com/?q=Via+Regina+Margherita+143+Villamagna+CH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-accent-gold font-medium hover:underline"
                    >
                      Apri in Google Maps →
                    </a>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-wood-dark rounded-2xl p-8 text-center">
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    Preferisci Chiamare?
                  </h3>
                  <p className="text-wood-cream/80 mb-6">
                    Siamo disponibili dal lunedì al venerdì, dalle 8:00 alle 19:00.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+393382850673"
                      className="btn-gold inline-flex items-center justify-center gap-2"
                    >
                      <Phone size={20} />
                      338 285 0673
                    </a>
                    <a
                      href="https://wa.me/393382850673"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent-gold font-medium mb-2 block">FAQ</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark">
                Domande Frequenti
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Come posso richiedere un preventivo?',
                a: 'Puoi compilare il form in questa pagina, chiamarci direttamente o inviarci un messaggio WhatsApp. Ti risponderemo entro 24 ore lavorative.',
              },
              {
                q: 'Effettuate sopralluoghi a domicilio?',
                a: 'Sì, offriamo sopralluoghi gratuiti in tutta la provincia di Chieti e Pescara. Per zone più distanti, concordiamo insieme le modalità.',
              },
              {
                q: 'Quali sono i tempi di realizzazione?',
                a: 'I tempi variano in base alla complessità del progetto. In media, un mobile su misura richiede dalle 4 alle 8 settimane. Vi comunicheremo sempre i tempi precisi in fase di preventivo.',
              },
              {
                q: 'Offrite garanzia sui lavori?',
                a: 'Tutti i nostri lavori sono coperti da garanzia. La durata varia in base al tipo di lavorazione e verrà specificata nel preventivo.',
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <details className="group bg-wood-beige rounded-xl p-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-heading text-lg font-semibold text-wood-dark pr-4">
                      {faq.q}
                    </h3>
                    <span className="text-accent-gold text-2xl font-light group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-wood-medium mt-4 leading-relaxed">{faq.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
