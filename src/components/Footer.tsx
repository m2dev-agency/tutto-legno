import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  servizi: [
    { name: 'Arredamento Su Misura', path: '/servizi#arredamento' },
    { name: 'Restauro Mobili', path: '/servizi#restauro' },
    { name: 'Serramenti', path: '/servizi#serramenti' },
    { name: 'Coperture in Legno', path: '/servizi#coperture' },
  ],
  azienda: [
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Galleria Lavori', path: '/galleria' },
    { name: 'Contattaci', path: '/contatti' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-wood-cream">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-wood-warm rounded-xl flex items-center justify-center">
                <span className="text-wood-dark font-heading text-2xl font-bold">T</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Tutto Legno</h3>
                <p className="text-sm text-wood-cream/70">dal 1995</p>
              </div>
            </Link>
            <p className="text-wood-cream/80 mb-6 leading-relaxed">
              Oltre 30 anni di passione e maestria artigianale nella lavorazione del legno. 
              Realizziamo mobili su misura, restauri e serramenti con la cura di una volta.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-wood-medium hover:bg-accent-gold rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-wood-medium hover:bg-accent-gold rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-6">I Nostri Servizi</h4>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-wood-cream/80 hover:text-accent-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Azienda</h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-wood-cream/80 hover:text-accent-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-gold flex-shrink-0 mt-1" />
                <span className="text-wood-cream/80">
                  Via Regina Margherita 143<br />
                  66010 Villamagna (CH)
                </span>
              </li>
              <li>
                <a
                  href="tel:+390871300660"
                  className="flex items-center gap-3 text-wood-cream/80 hover:text-accent-gold transition-colors"
                >
                  <Phone size={20} className="text-accent-gold flex-shrink-0" />
                  0871 300660
                </a>
              </li>
              <li>
                <a
                  href="tel:+393382850673"
                  className="flex items-center gap-3 text-wood-cream/80 hover:text-accent-gold transition-colors"
                >
                  <Phone size={20} className="text-accent-gold flex-shrink-0" />
                  338 285 0673
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tuttolegno-chieti.it"
                  className="flex items-center gap-3 text-wood-cream/80 hover:text-accent-gold transition-colors"
                >
                  <Mail size={20} className="text-accent-gold flex-shrink-0" />
                  info@tuttolegno-chieti.it
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-accent-gold flex-shrink-0 mt-1" />
                <span className="text-wood-cream/80">
                  Lun - Ven: 08:00 - 19:00<br />
                  Sab - Dom: Chiuso
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-wood-medium/30">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-wood-cream/60">
            <p>
              © {currentYear} Tuttolegno di De Luca Dario - P.IVA 01773500697. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
