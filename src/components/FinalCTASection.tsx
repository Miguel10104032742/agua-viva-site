import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/contact';
import Button from './Button';
import Reveal from './Reveal';

export default function FinalCTASection() {
  return (
    <section className="final-cta on-dark" aria-labelledby="cta-title">
      <Reveal className="container final-cta__inner">
        <h2 id="cta-title">Vamos entrar nessa juntos?</h2>
        <p>Entre em contato com a Água Viva e descubra as opções de atividades aquáticas disponíveis.</p>
        <Button href={whatsappUrl()} external variant="light" icon={<MessageCircle aria-hidden="true" size={22} />}>
          Conversar pelo WhatsApp
        </Button>
      </Reveal>
    </section>
  );
}
