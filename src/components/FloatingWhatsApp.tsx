import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "541173708427"; // Número de WhatsApp Argentina
  const message = "¡Hola! Tengo una consulta sobre la guía 'Salí del Veraz'";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
