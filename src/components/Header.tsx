import { useEffect, useRef, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { navItems, siteConfig } from '../config/site';
import { whatsappUrl } from '../lib/contact';
import { assetUrl } from '../lib/format';
import { useScrolled } from '../hooks/useScrolled';
import Button from './Button';
import LogoMark from './LogoMark';
import MobileMenu from './MobileMenu';

export default function Header({ activeId }: { activeId: string }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Esc fecha o menu e devolve o foco ao botão; telas largas fecham o menu automaticamente.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 1180px)');
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    document.documentElement.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
      document.documentElement.classList.remove('no-scroll');
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className={`site-header${solid ? ' is-solid' : ''}`}>
      <div className="container site-header__bar">
        <a href="#inicio" className="brand" aria-label={`${siteConfig.name} — ir para o início`}>
          {siteConfig.logo ? (
            <img src={assetUrl(siteConfig.logo.src)} alt={siteConfig.logo.alt} height={40} />
          ) : (
            <>
              <LogoMark />
              <span className="brand__text">
                {siteConfig.shortName}
                <small>{siteConfig.tagline}</small>
              </span>
            </>
          )}
        </a>

        <nav className="nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? 'true' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button
            href={whatsappUrl()}
            external
            small
            variant="light"
            className="site-header__cta"
            icon={<MessageCircle aria-hidden="true" size={18} />}
          >
            Fale pelo WhatsApp
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
          </button>
        </div>
      </div>

      {open && <MobileMenu activeId={activeId} onNavigate={() => setOpen(false)} />}
      {open && <div className="menu-backdrop" aria-hidden="true" onClick={() => setOpen(false)} />}
    </header>
  );
}
