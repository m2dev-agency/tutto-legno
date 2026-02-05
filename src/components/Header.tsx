import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chi Siamo', path: '/chi-siamo' },
  { name: 'Servizi', path: '/servizi' },
  { name: 'Galleria', path: '/galleria' },
  { name: 'Contatti', path: '/contatti' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-wood-warm to-wood-dark rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-wood-cream font-heading text-2xl font-bold">T</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-heading text-xl font-bold transition-colors ${
                isScrolled ? 'text-wood-dark' : 'text-white'
              }`}>
                Tutto Legno
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-wood-medium' : 'text-wood-cream'
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-wood-dark hover:bg-wood-beige' : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-wood-warm text-white'
                    : 'text-wood-dark hover:bg-wood-beige'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-wood-beige" />
            <a
              href="tel:+393382850673"
              className="flex items-center justify-center gap-2 btn-gold w-full"
            >
              <Phone size={18} />
              <span>Chiamaci Ora</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
