import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// Categorie galleria
const categories = [
  { id: 'tutti', label: 'Tutti i Lavori' },
  { id: 'cucine', label: 'Cucine' },
  { id: 'mobili', label: 'Mobili' },
  { id: 'porte', label: 'Porte' },
  { id: 'finestre', label: 'Finestre' },
  { id: 'esterni', label: 'Esterni' },
  { id: 'restauri', label: 'Restauri' },
];

// Galleria lavori - placeholder images
// TODO: Sostituire con immagini reali dalla galleria del cliente
const galleryItems = [
  {
    id: 1,
    category: 'cucine',
    title: 'Cucina in Legno Massello',
    description: 'Cucina su misura con piano in marmo e isola centrale',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 2,
    category: 'cucine',
    title: 'Cucina Moderna',
    description: 'Cucina contemporanea con finiture in legno naturale',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 3,
    category: 'mobili',
    title: 'Libreria su Misura',
    description: 'Libreria a parete in noce con illuminazione integrata',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
  },
  {
    id: 4,
    category: 'mobili',
    title: 'Mobile TV',
    description: 'Mobile basso per zona living in rovere',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
  {
    id: 5,
    category: 'porte',
    title: 'Porta in Legno Massello',
    description: 'Porta interna con lavorazione artigianale',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
  },
  {
    id: 6,
    category: 'porte',
    title: 'Portone Esterno',
    description: 'Portone d\'ingresso con intagli decorativi',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 7,
    category: 'finestre',
    title: 'Finestre in Legno',
    description: 'Infissi con doppio vetro e persiane coordinati',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
  },
  {
    id: 8,
    category: 'esterni',
    title: 'Pergolato in Legno',
    description: 'Struttura esterna per giardino con tettoia',
    image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80',
  },
  {
    id: 9,
    category: 'esterni',
    title: 'Casetta da Giardino',
    description: 'Casetta in legno per attrezzi e relax',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
  },
  {
    id: 10,
    category: 'restauri',
    title: 'Restauro Credenza Antica',
    description: 'Restauro conservativo di credenza dell\'800',
    image: 'https://images.unsplash.com/photo-1564505482614-a0a859e28f6d?w=800&q=80',
  },
  {
    id: 11,
    category: 'restauri',
    title: 'Restauro Armadio',
    description: 'Recupero e restauro armadio d\'epoca',
    image: 'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=800&q=80',
  },
  {
    id: 12,
    category: 'mobili',
    title: 'Credenza su Misura',
    description: 'Credenza in legno massello per sala da pranzo',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
];

export default function GalleriaPage() {
  const [activeCategory, setActiveCategory] = useState('tutti');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeCategory === 'tutti'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-wood-dark to-wood-medium">
        <div className="container-custom mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <span className="text-accent-gold font-medium mb-2 block">Portfolio</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              I Nostri Lavori
            </h1>
            <p className="text-wood-cream/80 text-lg max-w-2xl mx-auto">
              Ogni progetto racconta una storia di passione, precisione e cura artigianale. 
              Sfoglia la nostra galleria per scoprire cosa possiamo realizzare per te.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-16 z-30 shadow-md">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-wood-beige">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} animation="fade-up" delay={(index % 6) * 100}>
                <div
                  className="card cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="img-hover-zoom aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-accent-gold text-sm font-medium uppercase tracking-wide">
                        {categories.find((c) => c.id === item.category)?.label}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-accent-gold text-xs font-medium uppercase tracking-wide">
                      {categories.find((c) => c.id === item.category)?.label}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-wood-dark mt-1">
                      {item.title}
                    </h3>
                    <p className="text-wood-medium text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-wood-medium text-lg">
                Nessun lavoro trovato in questa categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-gold transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Chiudi"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-gold transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Immagine precedente"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-gold transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Immagine successiva"
          >
            <ChevronRight size={48} />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[currentImageIndex]?.image}
              alt={filteredItems[currentImageIndex]?.title}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <h3 className="font-heading text-xl font-semibold text-white">
                {filteredItems[currentImageIndex]?.title}
              </h3>
              <p className="text-wood-cream/80 mt-2">
                {filteredItems[currentImageIndex]?.description}
              </p>
              <p className="text-accent-gold text-sm mt-2">
                {currentImageIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <div className="bg-gradient-to-br from-wood-warm to-wood-medium rounded-3xl p-10 md:p-16 shadow-xl max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ti Piace Quello che Vedi?
              </h2>
              <p className="text-wood-cream/90 text-lg mb-8">
                Ogni progetto che vedi è stato realizzato su misura. Raccontaci la tua idea 
                e creeremo insieme qualcosa di unico per te.
              </p>
              <Link to="/contatti" className="btn-gold inline-flex items-center gap-2">
                Richiedi Preventivo Gratuito
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
