import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '393382850673';
  const message = encodeURIComponent(
    'Buongiorno, vorrei richiedere informazioni sui vostri servizi di falegnameria.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 whatsapp-pulse"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
