import { CalendarDays, MapPin, Waves } from 'lucide-react';
import { aboutContent, modalities, openingHours, siteConfig } from '../config/site';
import { assetUrl } from '../lib/format';
import DraftNotice from './DraftNotice';
import Reveal from './Reveal';
import SafeImage from './SafeImage';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  const { image } = aboutContent;
  const openDays = openingHours.filter((d) => d.periods.length > 0);
  const closed = openingHours.filter((d) => d.periods.length === 0);
  const daysText =
    closed.length > 0
      ? `Atendimento de ${openDays[0].label.split('-')[0].toLowerCase()} a ${openDays[openDays.length - 1].label.toLowerCase()}`
      : 'Atendimento todos os dias';

  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="container about">
        <Reveal className="about__media">
          <SafeImage
            src={assetUrl(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            fallbackLabel="Foto do local a enviar"
          />
        </Reveal>

        <Reveal delay={100} className="about__body">
          <SectionHeading id="sobre-title" eyebrow="Sobre nós" title={aboutContent.title} />
          {aboutContent.paragraphs.map((p) => (
            <p key={p} className="about__text">
              {p}
            </p>
          ))}
          {siteConfig.draftMode && <p className="about__text about__text--draft">{aboutContent.draftParagraph}</p>}
          <DraftNotice>Texto provisório — a ser confirmado pelo proprietário.</DraftNotice>

          <ul className="facts">
            <li>
              <Waves aria-hidden="true" size={20} />
              <span>{modalities.map((m) => m.name).join(' e ')}</span>
            </li>
            <li>
              <MapPin aria-hidden="true" size={20} />
              <span>
                {siteConfig.address.neighborhood}, {siteConfig.address.city} — {siteConfig.address.state}
              </span>
            </li>
            <li>
              <CalendarDays aria-hidden="true" size={20} />
              <span>{daysText}</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
