import { ExternalLink, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';
import { addressLine, mapDirectionsUrl, mapEmbedUrl, telUrl, whatsappUrl } from '../lib/contact';
import Button from './Button';
import DraftNotice from './DraftNotice';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  const { address, phone } = siteConfig;
  return (
    <section id="contato" className="section section--tint" aria-labelledby="contato-title">
      <div className="container">
        <SectionHeading id="contato-title" eyebrow="Contato" title="Fale com a Água Viva" center>
          Tire suas dúvidas sobre aulas, horários e matrículas pelo WhatsApp.
        </SectionHeading>

        <div className="contact">
          <Reveal className="contact__card">
            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <Phone aria-hidden="true" size={22} />
                </span>
                <div>
                  <strong>Telefone / WhatsApp</strong>
                  <a href={telUrl} className="contact__link" aria-label={`Ligar para ${phone.display}`}>
                    {phone.display}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <MapPin aria-hidden="true" size={22} />
                </span>
                <div>
                  <strong>Endereço</strong>
                  <address>
                    {address.street}
                    <br />
                    {address.neighborhood}, {address.city} — {address.state}
                    <br />
                    CEP {address.postalCode}
                  </address>
                </div>
              </li>
            </ul>

            {siteConfig.socialLinks.length > 0 && (
              <ul className="contact__social" aria-label="Redes sociais">
                {siteConfig.socialLinks.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                      <ExternalLink aria-hidden="true" size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <DraftNotice>
              Espaço para e-mail, redes sociais e outras informações de contato, caso o proprietário forneça.
            </DraftNotice>

            <div className="contact__actions">
              <Button href={whatsappUrl()} external icon={<MessageCircle aria-hidden="true" size={20} />}>
                Chamar no WhatsApp
              </Button>
              <Button href={mapDirectionsUrl} external variant="outline" icon={<Navigation aria-hidden="true" size={20} />}>
                Como chegar
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="contact__map" >
            <div id="localizacao" className="map-anchor" />
            <iframe
              title={`Mapa: ${addressLine}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
