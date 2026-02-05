import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Hammer, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { services } from './ServiziPage';

// Hero section images - placeholder
const heroImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  'https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?w=800&q=80',
  'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=800&q=80',
  'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
];

// Posizioni delle immagini - responsive e centrate nella viewport
// Desktop (lg+) - tutte le immagini visibili e ben distribuite
const positionsDesktop = [
  // Posizione 0: Grande a destra (principale) - più centrata
  { 
    top: '18%', 
    left: '50%', 
    width: '38vw', 
    height: '52vh',
    rotate: 2,
    opacity: 0.75,
  },
  // Posizione 1: Media in basso a sinistra - più visibile
  { 
    top: '48%', 
    left: '8%', 
    width: '22vw', 
    height: '30vh',
    rotate: -3,
    opacity: 0.6,
  },
  // Posizione 2: Piccola in alto a sinistra
  { 
    top: '10%', 
    left: '12%', 
    width: '16vw', 
    height: '20vh',
    rotate: 4,
    opacity: 0.5,
  },
  // Posizione 3: Nascosta (per la transizione)
  { 
    top: '40%', 
    left: '30%', 
    width: '14vw', 
    height: '16vh',
    rotate: 0,
    opacity: 0,
  },
];

// Tablet (md) - immagini più piccole e centrate
const positionsTablet = [
  { top: '15%', left: '52%', width: '40vw', height: '42vh', rotate: 2, opacity: 0.7 },
  { top: '52%', left: '8%', width: '32vw', height: '26vh', rotate: -2, opacity: 0.55 },
  { top: '8%', left: '8%', width: '24vw', height: '18vh', rotate: 3, opacity: 0.45 },
  { top: '35%', left: '30%', width: '18vw', height: '16vh', rotate: 0, opacity: 0 },
];

// Mobile - immagine principale come sfondo a schermo intero
const positionsMobile = [
  { top: '0%', left: '0%', width: '100%', height: '100%', rotate: 0, opacity: 0.4 },
  { top: '0%', left: '0%', width: '100%', height: '100%', rotate: 0, opacity: 0 },
  { top: '0%', left: '0%', width: '100%', height: '100%', rotate: 0, opacity: 0 },
  { top: '0%', left: '0%', width: '100%', height: '100%', rotate: 0, opacity: 0 },
];

// Hook per tracciare il mouse
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  
  return mousePosition;
}

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition();
  const [isLoaded, setIsLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    setIsLoaded(true);
    
    // Resize handler per responsive
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 4000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Seleziona le posizioni in base alla larghezza
  const getPositions = () => {
    if (windowWidth < 768) return positionsMobile;
    if (windowWidth < 1024) return positionsTablet;
    return positionsDesktop;
  };

  // Calcola il parallax basato sulla posizione del mouse
  const calcParallax = (intensity: number) => {
    if (!heroRef.current) return { x: 0, y: 0 };
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = ((mouse.x - rect.left - centerX) / centerX) * intensity;
    const y = ((mouse.y - rect.top - centerY) / centerY) * intensity;
    return { x, y };
  };

  const parallax = calcParallax(windowWidth < 768 ? 5 : 12);
  const positions = getPositions();

  // Calcola la posizione di ogni immagine basata sulla rotazione
  const getPositionForImage = (imageIndex: number) => {
    const posIndex = (imageIndex - rotation % heroImages.length + heroImages.length) % heroImages.length;
    return positions[posIndex] || positions[3];
  };

  return (
    <>
      {/* Hero Section - Awwwards Level */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-wood-dark"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 20% 40%, rgba(160, 82, 45, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 80% 60%, rgba(201, 160, 80, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse 100% 100% at 50% 100%, rgba(61, 35, 20, 0.8) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        {/* Floating images with physical movement animation - z-index 1, dietro tutto */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          {heroImages.map((img, imageIndex) => {
            const pos = getPositionForImage(imageIndex);
            return (
              <div 
                key={imageIndex}
                className="absolute overflow-hidden shadow-2xl rounded-2xl"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: pos.width,
                  height: pos.height,
                  opacity: pos.opacity,
                  transform: `translate(${parallax.x * (0.5 + imageIndex * 0.2)}px, ${parallax.y * (0.5 + imageIndex * 0.2)}px) rotate(${pos.rotate}deg)`,
                  transition: 'top 1.2s cubic-bezier(0.4, 0, 0.2, 1), left 1.2s cubic-bezier(0.4, 0, 0.2, 1), width 1.2s cubic-bezier(0.4, 0, 0.2, 1), height 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease-out',
                }}
              >
                <img 
                  src={img} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-wood-dark/30 to-transparent" />
              </div>
            );
          })}
        </div>

        {/* Grain texture overlay - z-index 2 */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-[2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Marquee text as bottom background - z-index 5, sopra le immagini */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-[5]">
          <div 
            className="flex whitespace-nowrap opacity-[0.12]"
            style={{
              maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            }}
          >
            <div className="flex animate-marquee">
              {Array(4).fill(null).map((_, i) => (
                <span key={i} className="flex items-center font-heading text-[10vw] md:text-[12vw] font-bold text-white tracking-tight">
                  <span className="mx-8 md:mx-12">Artigianato</span>
                  <span className="mx-8 md:mx-12">Tradizione</span>
                  <span className="mx-8 md:mx-12">Eccellenza</span>
                  <span className="mx-8 md:mx-12">Passione</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content - z-index 10, sopra tutto */}
        <div className="relative z-10 container-custom mx-auto px-4 py-32">
          <div className="max-w-5xl">
            {/* Eyebrow with animated line */}
            <div 
              className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="h-px w-12 bg-accent-gold" />
              <span className="text-accent-gold text-sm tracking-[0.3em] uppercase font-medium">
                Falegnameria Artigianale
              </span>
            </div>
            
            {/* Main title with staggered reveal */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-[0.9]">
              <span 
                className={`block overflow-hidden transition-all duration-1000 delay-100 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
              >
                <span className="inline-block">L'Arte</span>
              </span>
              <span 
                className={`block overflow-hidden transition-all duration-1000 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
              >
                <span className="inline-block">del <span className="italic font-normal text-accent-gold">Legno</span></span>
              </span>
              <span 
                className={`block overflow-hidden transition-all duration-1000 delay-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
              >
                <span 
                  className="inline-block text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #C9A050 0%, #D4AF37 50%, #C9A050 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s ease-in-out infinite',
                  }}
                >
                  Fatta a Mano
                </span>
              </span>
            </h1>
            
            {/* Description with reveal */}
            <div 
              className={`max-w-xl mb-12 transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-xl md:text-2xl text-wood-cream/70 leading-relaxed font-light">
                Creiamo <span className="text-white font-normal">mobili unici</span>, 
                restauriamo <span className="text-white font-normal">pezzi d'epoca</span> e 
                realizziamo <span className="text-white font-normal">serramenti</span> con 
                oltre 30 anni di passione artigianale.
              </p>
            </div>
            
            {/* CTA Buttons with hover effects */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link 
                to="/contatti" 
                className="group relative px-8 py-4 bg-accent-gold text-wood-dark font-semibold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,160,80,0.4)] text-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Richiedi Preventivo
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-wood-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold">
                  Richiedi Preventivo
                  <ArrowRight size={20} />
                </span>
              </Link>
              
              <Link 
                to="/galleria" 
                className="group relative px-8 py-4 border border-white/30 text-white font-medium rounded-full overflow-hidden transition-all duration-500 hover:border-white/60 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-accent-gold rounded-full" />
                  Esplora i Lavori
                </span>
              </Link>
            </div>

            {/* Animated stats ticker - hidden on mobile */}
            <div 
              className={`hidden sm:flex flex-wrap gap-8 md:gap-12 transition-all duration-1000 delay-900 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                { value: '30+', label: 'Anni di Maestria', suffix: '' },
                { value: '1000', label: 'Progetti Realizzati', suffix: '+' },
                { value: '100', label: 'Made in Italy', suffix: '%' },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl md:text-5xl font-bold text-white transition-colors duration-300 group-hover:text-accent-gold">
                      {stat.value}
                    </span>
                    <span className="text-accent-gold text-2xl font-bold">{stat.suffix}</span>
                  </div>
                  <div className="text-wood-cream/50 text-sm mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <span className="text-wood-cream/40 text-xs tracking-[0.4em] uppercase">Scroll</span>
          <div className="relative w-6 h-12 border border-wood-cream/20 rounded-full overflow-hidden">
            <div 
              className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-accent-gold rounded-full"
              style={{
                animation: 'scrollBounce 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
        
        {/* Image counter/carousel controls */}
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setRotation(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                rotation % heroImages.length === index ? 'bg-accent-gold w-12' : 'bg-white/20 hover:bg-white/40 w-8'
              }`}
              aria-label={`Mostra immagine ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Add keyframes via style tag */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(16px); opacity: 0.3; }
        }
      `}</style>

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
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-wood-warm/5 rounded-full blur-3xl" />
        
        <div className="container-custom mx-auto relative">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-accent-gold/10 text-accent-gold rounded-full text-sm font-medium mb-4">
                I Nostri Servizi
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-wood-dark mb-4">
                Soluzioni Artigianali
                <span className="block text-accent-gold">per Ogni Esigenza</span>
              </h2>
              <p className="text-wood-medium text-lg">
                Dalla progettazione alla realizzazione, offriamo servizi completi 
                per trasformare i tuoi spazi con la qualità del vero legno.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
                <Link 
                  to={`/servizi#${service.id}`} 
                  className="group relative block bg-white rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  data-cursor="pointer"
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-wood-dark to-wood-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number decoration */}
                  <span className="absolute top-4 right-4 text-8xl font-heading font-bold text-wood-beige/50 group-hover:text-white/10 transition-colors duration-500">
                    0{index + 1}
                  </span>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-wood-beige rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110">
                      <service.icon size={32} className="text-wood-warm group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-wood-dark mb-3 group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-wood-medium text-sm mb-6 group-hover:text-white/70 transition-colors duration-500">
                      {service.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent-gold font-medium text-sm group-hover:text-white transition-all duration-500">
                      <span>Scopri di più</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="text-center mt-16">
              <Link 
                to="/servizi" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-wood-dark text-white rounded-full font-medium transition-all duration-500 hover:bg-accent-gold hover:shadow-xl hover:shadow-accent-gold/20"
              >
                <span>Esplora Tutti i Servizi</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-wood-beige relative overflow-hidden">
        <div className="container-custom mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div className="max-w-xl mb-6 md:mb-0">
                <span className="inline-block px-4 py-1 bg-wood-warm/10 text-wood-warm rounded-full text-sm font-medium mb-4">
                  Portfolio
                </span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-wood-dark">
                  I Nostri
                  <span className="block text-gradient-animate">Ultimi Lavori</span>
                </h2>
              </div>
              <Link 
                to="/galleria" 
                className="group inline-flex items-center gap-2 text-wood-dark font-medium hover:text-accent-gold transition-colors"
                data-cursor="pointer"
              >
                <span>Vedi tutti i progetti</span>
                <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-accent-gold group-hover:border-accent-gold group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>
          </ScrollReveal>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {[
              { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', span: 'col-span-12 md:col-span-8 row-span-2', label: 'Cucine su Misura' },
              { img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80', span: 'col-span-6 md:col-span-4 row-span-1', label: 'Porte Interne' },
              { img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80', span: 'col-span-6 md:col-span-4 row-span-1', label: 'Restauro' },
              { img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', span: 'col-span-6 md:col-span-4 row-span-1', label: 'Serramenti' },
              { img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80', span: 'col-span-6 md:col-span-4 row-span-1', label: 'Armadi' },
              { img: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&q=80', span: 'col-span-12 md:col-span-4 row-span-1', label: 'Esterni' },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="fade-in" delay={index * 100} className={item.span}>
                <div 
                  className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer"
                  data-cursor-text="Scopri"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-wood-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white font-heading text-xl md:text-2xl font-semibold">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2 text-accent-gold text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span>Esplora</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Awwwards Style */}
      <section className="relative py-32 overflow-hidden bg-wood-dark">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl morph-shape" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-wood-warm/10 rounded-full blur-3xl morph-shape" style={{ animationDelay: '-4s' }} />
        </div>
        
        {/* Grain overlay */}
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="container-custom mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              {/* Decorative element */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-gold" />
                <span className="text-accent-gold text-sm tracking-[0.3em] uppercase">Iniziamo Insieme</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-gold" />
              </div>
              
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Hai un Progetto
                <span className="block">
                  <span className="text-gradient-animate">in Mente?</span>
                </span>
              </h2>
              
              <p className="text-wood-cream/70 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
                Raccontaci la tua idea. Ogni grande creazione inizia da una 
                <span className="text-white font-normal"> conversazione</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  to="/contatti" 
                  className="group relative px-10 py-5 bg-accent-gold text-wood-dark font-semibold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,160,80,0.5)] glow-gold"
                  data-cursor="pointer"
                >
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    Richiedi Preventivo Gratuito
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <span className="text-wood-cream/40 text-sm">oppure</span>
                
                <a
                  href="tel:+393382850673"
                  className="group flex items-center gap-4 text-white hover:text-accent-gold transition-colors"
                  data-cursor="pointer"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-accent-gold group-hover:border-accent-gold group-hover:text-wood-dark transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-wood-cream/50">Chiamaci</div>
                    <div className="text-xl font-semibold">338 285 0673</div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
      </section>
    </>
  );
}
