import { MessageCircle } from 'lucide-react';
import { navItems } from '../config/site';
import { whatsappUrl } from '../lib/contact';
import Button from './Button';

interface MobileMenuProps {
  activeId: string;
  onNavigate: () => void;
}

export default function MobileMenu({ activeId, onNavigate }: MobileMenuProps) {
  return (
    <div id="mobile-menu" className="mobile-menu">
      <nav aria-label="Navegação principal (celular)">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        href={whatsappUrl()}
        external
        onClick={onNavigate}
        className="mobile-menu__cta"
        icon={<MessageCircle aria-hidden="true" size={20} />}
      >
        Fale pelo WhatsApp
      </Button>
    </div>
  );
}
