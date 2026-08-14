import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/siteConfig";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-green-600 hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
