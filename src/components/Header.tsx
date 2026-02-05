import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, MapPin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/', number: '01' },
  { name: 'Chi Siamo', path: '/chi-siamo', number: '02' },
  { name: 'Servizi', path: '/servizi', number: '03' },
  { name: 'Galleria', path: '/galleria', number: '04' },
  { name: 'Contatti', path: '/contatti', number: '05' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveIndex(-1);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMenuOpen 
            ? 'bg-transparent shadow-none py-4 backdrop-blur-none'
            : isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
              : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-50">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-accent-gold' 
                  : 'bg-gradient-to-br from-wood-warm to-wood-dark'
              }`}>
                <span className={`font-heading text-2xl font-bold transition-colors duration-300 ${
                  isMenuOpen ? 'text-wood-dark' : 'text-wood-cream'
                }`}>T</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-heading text-xl font-bold transition-colors duration-300 ${
                  isMenuOpen ? 'text-white' : isScrolled ? 'text-wood-dark' : 'text-white'
                }`}>
                  Tutto Legno
                </h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isMenuOpen ? 'text-white/60' : isScrolled ? 'text-wood-medium' : 'text-wood-cream'
                }`}>
                  Falegnameria Artigianale
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium transition-colors hover:text-accent-gold ${
                    isScrolled ? 'text-wood-dark' : 'text-white'
                  } ${location.pathname === link.path ? 'text-accent-gold' : ''}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-gold rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+393382850673"
                className="flex items-center gap-2 btn-gold"
              >
                <Phone size={18} />
                <span>Chiamaci</span>
              </a>
            </div>

            {/* Mobile Menu Button - Creative Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center"
              aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              <div className="relative w-7 h-5 flex flex-col justify-between">
                <span 
                  className={`block h-0.5 rounded-full transition-all duration-500 origin-center ${
                    isMenuOpen 
                      ? 'bg-white rotate-45 translate-y-[9px]' 
                      : isScrolled ? 'bg-wood-dark' : 'bg-white'
                  }`} 
                />
                <span 
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isMenuOpen 
                      ? 'bg-white opacity-0 scale-0' 
                      : isScrolled ? 'bg-wood-dark' : 'bg-white'
                  }`} 
                />
                <span 
                  className={`block h-0.5 rounded-full transition-all duration-500 origin-center ${
                    isMenuOpen 
                      ? 'bg-white -rotate-45 -translate-y-[9px]' 
                      : isScrolled ? 'bg-wood-dark' : 'bg-white'
                  }`} 
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Fullscreen Mobile Menu - Creative Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Animated background panels */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className={`absolute inset-0 bg-wood-dark transition-transform duration-700 ease-out origin-top ${
              isMenuOpen ? 'scale-y-100' : 'scale-y-0'
            }`}
          />
          <div 
            className={`absolute inset-0 transition-transform duration-700 delay-100 ease-out origin-top ${
              isMenuOpen ? 'scale-y-100' : 'scale-y-0'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.3) 0%, transparent 50%)',
            }}
          />
          {/* Decorative circles */}
          <div 
            className={`absolute -top-32 -right-32 w-96 h-96 rounded-full transition-all duration-1000 delay-300 ${
              isMenuOpen ? 'opacity-10 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)' }}
          />
          <div 
            className={`absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full transition-all duration-1000 delay-500 ${
              isMenuOpen ? 'opacity-10 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ background: 'radial-gradient(circle, #8B5A2B 0%, transparent 70%)' }}
          />
        </div>

        {/* Menu content */}
        <div className="relative h-full flex flex-col justify-center px-8 pt-24 pb-12">
          {/* Navigation links */}
          <nav className="flex-1 flex flex-col justify-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(-1)}
                className={`group relative py-4 transition-all duration-500 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${200 + index * 100}ms` : '0ms' }}
              >
                <div className="flex items-center gap-6">
                  {/* Number */}
                  <span className={`text-xs font-mono transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-accent-gold' : 'text-white/30'
                  }`}>
                    {link.number}
                  </span>
                  
                  {/* Link text */}
                  <span className={`font-heading text-4xl sm:text-5xl font-bold transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'text-accent-gold' 
                      : activeIndex === index 
                        ? 'text-white translate-x-4' 
                        : 'text-white/80'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Arrow indicator */}
                  <ArrowRight 
                    size={28} 
                    className={`transition-all duration-300 ${
                      location.pathname === link.path || activeIndex === index
                        ? 'opacity-100 translate-x-0 text-accent-gold' 
                        : 'opacity-0 -translate-x-4'
                    }`} 
                  />
                </div>
                
                {/* Underline effect */}
                <div 
                  className={`absolute bottom-2 left-12 right-0 h-px transition-all duration-500 ${
                    location.pathname === link.path 
                      ? 'bg-accent-gold/50 scale-x-100' 
                      : activeIndex === index 
                        ? 'bg-white/20 scale-x-100' 
                        : 'bg-white/10 scale-x-0'
                  }`}
                  style={{ transformOrigin: 'left' }}
                />
              </Link>
            ))}
          </nav>

          {/* Bottom section with contact info */}
          <div 
            className={`mt-auto pt-8 border-t border-white/10 transition-all duration-700 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '700ms' : '0ms' }}
          >
            {/* Quick contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <a 
                href="tel:+393382850673" 
                className="flex items-center gap-3 text-white/60 hover:text-accent-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                  <Phone size={18} className="text-accent-gold" />
                </div>
                <span className="text-sm">+39 338 285 0673</span>
              </a>
              <a 
                href="mailto:info@tuttolegno.it" 
                className="flex items-center gap-3 text-white/60 hover:text-accent-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                  <Mail size={18} className="text-accent-gold" />
                </div>
                <span className="text-sm">info@tuttolegno.it</span>
              </a>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-3 text-white/40 text-xs">
              <MapPin size={14} />
              <span>Pescara, Abruzzo — Italia</span>
            </div>

            {/* CTA Button */}
            <Link
              to="/contatti"
              className={`mt-6 flex items-center justify-center gap-3 w-full py-4 bg-accent-gold text-wood-dark font-semibold rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,160,80,0.4)] ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? '800ms' : '0ms' }}
            >
              <span>Richiedi Preventivo</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
