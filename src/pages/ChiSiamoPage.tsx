import { Award, Heart, Hammer, Users, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const values = [
  {
    icon: Hammer,
    title: 'Artigianalità',
    description: 'Ogni pezzo nasce dalle nostre mani, con la cura e l\'attenzione che solo l\'artigianato può offrire.',
  },
  {
    icon: Heart,
    title: 'Passione',
    description: 'L\'amore per il legno guida ogni nostro gesto, dalla scelta del materiale alla finitura finale.',
  },
  {
    icon: Award,
    title: 'Qualità',
    description: 'Selezioniamo solo i migliori materiali e non scendiamo a compromessi sulla qualità del lavoro.',
  },
  {
    icon: Users,
    title: 'Relazione',
    description: 'Costruiamo rapporti duraturi con i nostri clienti, basati su fiducia e trasparenza.',
  },
];

const milestones = [
  { year: '1995', title: 'La Fondazione', description: 'Dario De Luca apre il laboratorio a Villamagna' },
  { year: '2000', title: 'Primo Ampliamento', description: 'Il laboratorio si espande con nuovi macchinari' },
  { year: '2010', title: 'Tradizione e Innovazione', description: 'Introduciamo tecnologie moderne mantenendo l\'anima artigianale' },
  { year: '2020', title: '25 Anni di Attività', description: 'Celebriamo un quarto di secolo di passione per il legno' },
  { year: 'Oggi', title: '30+ Anni di Esperienza', description: 'Continuiamo a crescere con la stessa passione del primo giorno' },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-wood-dark to-wood-medium relative overflow-hidden">
        <div className="absolute inset-0 wood-texture opacity-20" />
        <div className="container-custom mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-left">
              <div>
                <span className="text-accent-gold font-medium mb-2 block">Chi Siamo</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                  La Storia di una<br />
                  <span className="text-accent-gold">Passione Artigianale</span>
                </h1>
                <p className="text-wood-cream/90 text-lg leading-relaxed">
                  Da oltre 30 anni, nel cuore dell'Abruzzo, trasformiamo il legno in opere d'arte 
                  funzionali. La nostra storia è fatta di dedizione, tradizione e amore 
                  per un mestiere antico che continua a vivere nelle nostre mani.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-right">
              <div className="relative">
                {/* Immagine Dario De Luca / laboratorio - placeholder */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1564505482614-a0a859e28f6d?w=800&q=80"
                    alt="Dario De Luca, fondatore di Tutto Legno"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent-gold text-wood-dark px-6 py-4 rounded-xl shadow-lg">
                  <div className="font-heading text-3xl font-bold">30+</div>
                  <div className="text-sm font-medium">Anni di esperienza</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* La Nostra Storia */}
      <section className="section-padding bg-wood-beige">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <span className="text-accent-gold font-medium mb-2 block">La Nostra Storia</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark">
                  Tradizione e Innovazione dal 1995
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
                <Quote size={48} className="text-accent-gold/30 mb-6" />
                <p className="text-wood-dark text-lg leading-relaxed mb-6">
                  La falegnameria <strong>Tutto Legno</strong> nasce nel 1995 dalla passione di 
                  <strong> Dario De Luca</strong> per la lavorazione del legno. Un mestiere appreso 
                  in gioventù e coltivato con dedizione negli anni, fino a diventare una professione 
                  e una ragione di vita.
                </p>
                <p className="text-wood-medium leading-relaxed mb-6">
                  Il nostro laboratorio sorge a <strong>Villamagna</strong>, piccolo comune collinare 
                  in provincia di Chieti, nel cuore verde dell'Abruzzo. Da qui, serviamo clienti 
                  in tutta la regione e oltre, portando la qualità dell'artigianato abruzzese 
                  nelle case e nelle attività di chi sceglie il vero legno.
                </p>
                <p className="text-wood-medium leading-relaxed">
                  Oggi, dopo oltre 30 anni di attività, continuiamo a lavorare con la stessa passione 
                  del primo giorno. Ogni mobile che esce dal nostro laboratorio porta con sé la nostra 
                  firma invisibile: la cura del dettaglio, la scelta dei materiali migliori, 
                  il rispetto per un mestiere che non conosce scorciatoie.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-accent-gold font-medium mb-2 block">Il Nostro Percorso</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark">
                Le Tappe Fondamentali
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} animation="fade-up" delay={index * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-wood-warm rounded-full flex items-center justify-center text-white font-heading font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-wood-warm/30 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-heading text-xl font-semibold text-wood-dark mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-wood-medium">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* I Nostri Valori */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-accent-gold font-medium mb-2 block">I Nostri Valori</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark">
                Cosa Ci Guida Ogni Giorno
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} animation="fade-up" delay={index * 100}>
                <div className="text-center bg-wood-beige rounded-2xl p-6">
                  <div className="w-20 h-20 bg-wood-warm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon size={36} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-wood-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-wood-medium text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratorio */}
      <section className="section-padding bg-wood-beige">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-left">
              <div>
                <span className="text-accent-gold font-medium mb-2 block">Il Laboratorio</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark mb-6">
                  Dove Nascono i Nostri Lavori
                </h2>
                <p className="text-wood-medium mb-6 leading-relaxed">
                  Il nostro laboratorio è il cuore pulsante dell'attività. Qui, tra macchinari 
                  moderni e attrezzi della tradizione, ogni progetto prende forma. L'odore del 
                  legno appena tagliato, il suono degli utensili, la polvere fine che danza 
                  nella luce: sono questi gli elementi del nostro quotidiano.
                </p>
                <p className="text-wood-medium mb-8 leading-relaxed">
                  Disponiamo di attrezzature all'avanguardia per le lavorazioni di precisione, 
                  ma non dimentichiamo mai l'importanza della mano dell'artigiano. Perché è 
                  il tocco umano a fare la differenza tra un prodotto industriale e un'opera 
                  artigianale.
                </p>
                <Link to="/contatti" className="btn-primary inline-flex items-center gap-2">
                  Vieni a Trovarci
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right">
              <div className="grid grid-cols-2 gap-4">
                {/* Placeholder immagini laboratorio */}
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                    alt="Laboratorio falegnameria - attrezzi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80"
                    alt="Laboratorio falegnameria - lavorazione"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1564505482614-a0a859e28f6d?w=400&q=80"
                    alt="Laboratorio falegnameria - dettaglio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=400&q=80"
                    alt="Laboratorio falegnameria - macchinari"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-wood-beige">
        <div className="container-custom mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <div className="bg-gradient-to-br from-wood-warm to-wood-medium rounded-3xl p-10 md:p-16 shadow-xl max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Vuoi Conoscerci di Persona?
              </h2>
              <p className="text-wood-cream/90 text-lg mb-8">
                Ti aspettiamo nel nostro laboratorio a Villamagna per mostrarti come lavoriamo 
                e discutere insieme del tuo progetto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contatti" className="btn-gold inline-flex items-center justify-center gap-2">
                  Contattaci Ora
                </Link>
                <Link to="/galleria" className="bg-white/20 hover:bg-white hover:text-wood-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2">
                  Guarda i Nostri Lavori
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
