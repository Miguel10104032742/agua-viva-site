import { useState } from 'react';
import { ImagePlus, ZoomIn } from 'lucide-react';
import { gallery, galleryPlaceholders, siteConfig } from '../config/site';
import { assetUrl } from '../lib/format';
import DraftNotice from './DraftNotice';
import Lightbox from './Lightbox';
import Reveal from './Reveal';
import SafeImage from './SafeImage';
import SectionHeading from './SectionHeading';

export default function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="estrutura" className="section section--tint" aria-labelledby="estrutura-title">
      <div className="container">
        <SectionHeading id="estrutura-title" eyebrow="Estrutura" title="Conheça nosso espaço" center>
          Veja o ambiente onde as atividades acontecem. Toque em uma foto para ampliar.
        </SectionHeading>

        <ul className="gallery">
          {gallery.map((photo, i) => (
            <Reveal as="li" key={photo.id} delay={i * 80} className={i === 0 ? 'gallery__item gallery__item--wide' : 'gallery__item'}>
              <button
                type="button"
                className="gallery__button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Ampliar foto: ${photo.caption}`}
              >
                <SafeImage
                  src={assetUrl(i === 0 ? photo.src : (photo.thumb ?? photo.src))}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                />
                <span className="gallery__caption">{photo.caption}</span>
                <span className="gallery__zoom" aria-hidden="true">
                  <ZoomIn size={20} />
                </span>
              </button>
            </Reveal>
          ))}

          {siteConfig.draftMode &&
            galleryPlaceholders.map((label) => (
              <li key={label} className="gallery__item gallery__placeholder">
                <ImagePlus aria-hidden="true" size={30} />
                <strong>{label}</strong>
                <span>Foto a enviar pelo proprietário</span>
              </li>
            ))}
        </ul>

        <DraftNotice>
          A foto da piscina é uma referência visual inicial. Substitua e acrescente as fotos reais do estabelecimento em
          src/config/site.ts.
        </DraftNotice>
      </div>

      {openIndex !== null && (
        <Lightbox photos={gallery} index={openIndex} onIndexChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  );
}
