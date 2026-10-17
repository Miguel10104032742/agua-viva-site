import { MapPin, MessageCircle } from 'lucide-react';
import { heroContent, siteConfig } from '../config/site';
import { whatsappUrl } from '../lib/contact';
import { assetSrcSet, assetUrl } from '../lib/format';
import Button from './Button';
import SafeImage from './SafeImage';

/** Evita que palavras com hífen (ex.: "bem-estar") quebrem de linha no meio. */
function keepHyphenatedTogether(text: string) {
  return text.split(/([\p{L}]+-[\p{L}]+)/u).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function HeroSection() {
  const { image } = heroContent;
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <SafeImage
        className="hero__img"
        src={assetUrl(image.src)}
        srcSet={assetSrcSet(image.srcSet)}
        sizes="100vw"
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        fallbackLabel=""
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__chip">
          <MapPin aria-hidden="true" size={16} />
          <span>
            {siteConfig.address.neighborhood}, {siteConfig.address.city} — {siteConfig.address.state}
          </span>
        </p>
        <h1 id="hero-title">{keepHyphenatedTogether(heroContent.title)}</h1>
        <p className="hero__text">{heroContent.text}</p>
        <div className="hero__actions">
          <Button href="#modalidades" variant="light">
            {heroContent.primaryCta}
          </Button>
          <Button
            href={whatsappUrl()}
            external
            variant="ghost-light"
            icon={<MessageCircle aria-hidden="true" size={20} />}
          >
            {heroContent.secondaryCta}
          </Button>
        </div>
      </div>

      <svg className="hero__wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 48c180 44 360 44 540 8s360-48 540-16 270 28 360 12v28H0z" fill="#fff" />
      </svg>
    </section>
  );
}
