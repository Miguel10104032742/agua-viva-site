import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/contact';

/** Botão flutuante, sempre à mão no celular e no computador. */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Conversar pelo WhatsApp (abre em nova aba)"
    >
      <MessageCircle aria-hidden="true" size={28} />
      <span className="wa-float__label">WhatsApp</span>
    </a>
  );
}
