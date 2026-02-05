import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Hammer, Users } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { services } from './ServiziPage';

// Hero section images - placeholder
const heroImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80'; // falegnameria/laboratorio

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/80 via-wood-dark/60 to-wood-dark/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom mx-auto px-4 text-center text-white py-32">
          <ScrollReveal animation="fade-up">
            <span className="inline-block px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-medium mb-6">
              Dal 1995 - Oltre 30 anni di esperienza
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              L'Arte del Legno<br />
              <span className="text-accent-gold">Fatta a Mano</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-wood-cream/90 max-w-2xl mx-auto mb-10">
              Falegnameria artigianale nel cuore dell'Abruzzo. 
              Creiamo mobili su misura, restauriamo pezzi d'epoca e realizziamo serramenti con la passione di sempre.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contatti" className="btn-gold inline-flex items-center justify-center gap-2">
                Richiedi Preventivo Gratuito
                <ArrowRight size={20} />
              </Link>
              <Link to="/galleria" className="btn-secondary border-white text-white hover:bg-white hover:text-wood-dark inline-flex items-center justify-center gap-2">
                Scopri i Nostri Lavori
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: '30+', label: 'Anni di Esperienza' },
              { icon: Hammer, value: '1000+', label: 'Progetti Realizzati' },
              { icon: Users, value: '100%', label: 'Clienti Soddisfatti' },
              { icon: Award, value: '100%', label: 'Made in Italy' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-wood-beige rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={32} className="text-wood-warm" />
                  </div>
                  <div className="font-heading text-3xl md:text-4xl font-bold text-wood-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-wood-medium text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-wood-beige">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-left">
              <div className="relative">
                {/* Immagine laboratorio/artigiano al lavoro - placeholder */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1564505482614-a0a859e28f6d?w=800&q=80"
                    alt="Maestro artigiano al lavoro nel laboratorio di falegnameria"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-gold/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right">
              <div>
                <span className="text-accent-gold font-medium mb-2 block">Chi Siamo</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark mb-6">
                  Tradizione e Passione dal 1995
                </h2>
                <p className="text-wood-medium mb-6 leading-relaxed">
                  La falegnameria <strong>Tutto Legno</strong> nasce dalla passione di Dario De Luca 
                  per la lavorazione del legno. Da oltre 30 anni, nel nostro laboratorio di Villamagna, 
                  trasformiamo il legno in opere uniche: mobili su misura che raccontano storie, 
                  restauri che ridanno vita a pezzi d'epoca, serramenti che uniscono bellezza e funzionalità.
                </p>
                <p className="text-wood-medium mb-8 leading-relaxed">
                  Ogni progetto è un viaggio: dall'ascolto delle tue esigenze alla consegna finale, 
                  ti accompagniamo con la cura artigianale che ci contraddistingue.
                </p>
                <Link to="/chi-siamo" className="btn-primary inline-flex items-center gap-2">
                  Scopri la Nostra Storia
                  <ArrowRight size={20} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent-gold font-medium mb-2 block">I Nostri Servizi</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark mb-4">
                Soluzioni Artigianali per Ogni Esigenza
              </h2>
              <p className="text-wood-medium">
                Dalla progettazione alla realizzazione, offriamo servizi completi 
                per trasformare i tuoi spazi con la qualità del vero legno.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
                <Link to={`/servizi#${service.id}`} className="card group p-6 h-full">
                  <div className="w-14 h-14 bg-wood-beige rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-gold transition-colors">
                    <service.icon size={28} className="text-wood-warm group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-wood-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-wood-medium text-sm mb-4">
                    {service.shortDesc}
                  </p>
                  <span className="text-accent-gold font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Scopri di più <ArrowRight size={16} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="text-center mt-12">
              <Link to="/servizi" className="btn-secondary inline-flex items-center gap-2">
                Vedi Tutti i Servizi
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-wood-dark">
        <div className="container-custom mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent-gold font-medium mb-2 block">Portfolio</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                I Nostri Ultimi Lavori
              </h2>
              <p className="text-wood-cream/80">
                Ogni progetto racconta una storia di passione, precisione e cura artigianale.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Placeholder gallery images - da sostituire con immagini reali */}
            {[
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', // cucina
              'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80', // porta
              'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80', // mobile
              'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', // finestra
              'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80', // armadio
              'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&q=80', // pergolato
            ].map((img, index) => (
              <ScrollReveal key={index} animation="fade-in" delay={index * 100}>
                <div className="img-hover-zoom aspect-square rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt={`Progetto realizzato ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={600}>
            <div className="text-center mt-12">
              <Link to="/galleria" className="btn-gold inline-flex items-center gap-2">
                Esplora la Galleria Completa
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-wood-warm to-wood-dark relative overflow-hidden">
        <div className="absolute inset-0 wood-texture opacity-30" />
        <div className="container-custom mx-auto relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Hai un Progetto in Mente?
              </h2>
              <p className="text-wood-cream/90 text-lg mb-10">
                Raccontaci la tua idea. Offriamo consulenza gratuita e preventivi personalizzati 
                per realizzare il mobile dei tuoi sogni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contatti" className="btn-gold inline-flex items-center justify-center gap-2">
                  Richiedi Preventivo Gratuito
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+393382850673"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-wood-dark inline-flex items-center justify-center gap-2"
                >
                  Chiamaci: 338 285 0673
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
