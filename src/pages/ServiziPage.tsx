import { 
  ChefHat, 
  Sofa, 
  Building2, 
  Wrench, 
  DoorOpen, 
  Grid3X3, 
  TreeDeciduous, 
  Home,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export const services = [
  {
    id: 'arredamento',
    title: 'Arredamento Su Misura',
    shortDesc: 'Cucine, mobili e arredi personalizzati per ogni ambiente.',
    icon: ChefHat,
    description: `Progettiamo e realizziamo arredi su misura per la tua casa, ufficio o attività commerciale. 
    Ogni pezzo nasce dall'ascolto delle tue esigenze e prende forma nel nostro laboratorio con la cura artigianale che ci contraddistingue.`,
    features: [
      'Cucine personalizzate in legno massello',
      'Mobili per soggiorno e zona living',
      'Arredi per camere da letto',
      'Soluzioni per uffici e studi',
      'Arredi per negozi e attività commerciali',
      'Progettazione 3D e consulenza',
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 'restauro',
    title: 'Restauro Mobili',
    shortDesc: 'Ridiamo vita ai mobili d\'epoca con tecniche tradizionali.',
    icon: Wrench,
    description: `Il restauro è un'arte che richiede pazienza, competenza e rispetto per la storia di ogni pezzo. 
    Restauriamo mobili antichi e d'epoca, riportandoli al loro splendore originale senza snaturarne l'autenticità.`,
    features: [
      'Restauro conservativo mobili antichi',
      'Ricostruzione parti mancanti',
      'Lucidatura e finitura tradizionale',
      'Trattamento antitarlo',
      'Modifiche e riadattamenti',
      'Riparazioni specializzate',
    ],
    image: 'https://images.unsplash.com/photo-1564505482614-a0a859e28f6d?w=800&q=80',
  },
  {
    id: 'serramenti',
    title: 'Serramenti e Infissi',
    shortDesc: 'Porte, finestre e serramenti in legno di qualità.',
    icon: DoorOpen,
    description: `I nostri serramenti uniscono estetica e funzionalità, garantendo isolamento termico e acustico 
    senza rinunciare alla bellezza naturale del legno. Realizziamo porte, finestre e infissi su misura.`,
    features: [
      'Porte interne ed esterne in legno',
      'Finestre in legno con doppio vetro',
      'Portoncini blindati rivestiti',
      'Persiane e scuri',
      'Porte basculanti per garage',
      'Zanzariere su misura',
    ],
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
  },
  {
    id: 'coperture',
    title: 'Coperture e Strutture',
    shortDesc: 'Tettoie, pergolati e strutture in legno per esterni.',
    icon: TreeDeciduous,
    description: `Progettiamo e realizziamo strutture in legno per esterni: tettoie, pergolati, gazebo e coperture 
    che valorizzano i tuoi spazi esterni con materiali naturali e duraturi.`,
    features: [
      'Tettoie e pensiline in legno',
      'Pergolati e gazebo',
      'Casette da giardino',
      'Tetti in legno con travi a vista',
      'Porticati e verande',
      'Recinzioni e staccionate',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
];

const additionalServices = [
  { icon: Sofa, title: 'Mobili Living', desc: 'Librerie, credenze e mobili TV' },
  { icon: Building2, title: 'Contract', desc: 'Arredi per hotel e ristoranti' },
  { icon: Grid3X3, title: 'Rivestimenti', desc: 'Boiserie e pannellature' },
  { icon: Home, title: 'Scale in Legno', desc: 'Scale interne e corrimano' },
];

export default function ServiziPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-wood-dark to-wood-medium">
        <div className="container-custom mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <span className="text-accent-gold font-medium mb-2 block">I Nostri Servizi</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Soluzioni Complete per<br />il Tuo Progetto in Legno
            </h1>
            <p className="text-wood-cream/80 text-lg max-w-2xl mx-auto">
              Dalla consulenza alla realizzazione, ti accompagniamo in ogni fase 
              con la qualità e la cura artigianale che ci contraddistingue da oltre 30 anni.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-wood-beige">
        <div className="container-custom mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 scroll-mt-32 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <ScrollReveal animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      {/* Placeholder - sostituire con immagini reali */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 bg-accent-gold/20 rounded-2xl -z-10`} />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-16 h-16 bg-wood-warm rounded-2xl flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-wood-medium mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-accent-gold flex-shrink-0 mt-0.5" />
                        <span className="text-wood-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contatti" className="btn-primary inline-flex items-center gap-2">
                    Richiedi Preventivo
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent-gold font-medium mb-2 block">E Molto Altro</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark mb-4">
                Altri Servizi
              </h2>
              <p className="text-wood-medium">
                La nostra esperienza spazia in molteplici ambiti della lavorazione del legno.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <ScrollReveal key={service.title} animation="fade-up" delay={index * 100}>
                <div className="card p-6 text-center">
                  <div className="w-14 h-14 bg-wood-beige rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon size={28} className="text-wood-warm" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-wood-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-wood-medium text-sm">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-wood-dark">
        <div className="container-custom mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent-gold font-medium mb-2 block">Come Lavoriamo</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Il Nostro Processo
              </h2>
              <p className="text-wood-cream/80">
                Dalla prima idea alla consegna, ti accompagniamo in ogni fase.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulenza', desc: 'Ascoltiamo le tue esigenze e valutiamo insieme il progetto' },
              { step: '02', title: 'Progettazione', desc: 'Creiamo il design su misura per i tuoi spazi' },
              { step: '03', title: 'Realizzazione', desc: 'Lavoriamo nel nostro laboratorio con cura artigianale' },
              { step: '04', title: 'Consegna', desc: 'Installiamo e ti consegniamo il lavoro finito' },
            ].map((item, index) => (
              <ScrollReveal key={item.step} animation="fade-up" delay={index * 100}>
                <div className="text-center relative">
                  <div className="text-7xl font-heading font-bold text-wood-medium/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-wood-cream/70 text-sm">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-wood-medium/50 to-transparent" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-wood-warm to-wood-medium">
        <div className="container-custom mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Realizzare il Tuo Progetto?
            </h2>
            <p className="text-wood-cream/90 text-lg mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita. Saremo felici di ascoltare la tua idea 
              e proporti la soluzione migliore.
            </p>
            <Link to="/contatti" className="btn-gold inline-flex items-center gap-2">
              Richiedi Preventivo Gratuito
              <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
