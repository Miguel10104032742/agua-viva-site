import { ExternalLink } from 'lucide-react';
import { navItems, siteConfig } from '../config/site';
import { telUrl } from '../lib/contact';
import { groupedHours } from '../lib/format';
import LogoMark from './LogoMark';

export default function Footer() {
  const { address, phone } = siteConfig;
  return (
    <footer className="site-footer on-dark">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">
            <LogoMark size={36} />
            <span>{siteConfig.name}</span>
          </p>
          <address>
            {address.street}
            <br />
            {address.neighborhood}, {address.city} — {address.state}
            <br />
            CEP {address.postalCode}
          </address>
          <p>
            <a href={telUrl}>{phone.display}</a>
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2>Navegação</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2>Horários</h2>
          <ul className="site-footer__hours">
            {groupedHours().map((g) => (
              <li key={g.label}>
                <span>{g.label}</span> {g.hours}
              </li>
            ))}
          </ul>

          {siteConfig.socialLinks.length > 0 && (
            <>
              <h2 className="site-footer__social-title">Redes sociais</h2>
              <ul>
                {siteConfig.socialLinks.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label} <ExternalLink aria-hidden="true" size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
