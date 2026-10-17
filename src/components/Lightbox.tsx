import { useEffect, useRef, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryPhoto } from '../config/site';
import { assetUrl } from '../lib/format';
import SafeImage from './SafeImage';

interface LightboxProps {
  photos: GalleryPhoto[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Visualização ampliada usando <dialog> nativo (foco preso, Esc fecha, leitores de tela entendem). */
export default function Lightbox({ photos, index, onIndexChange, onClose }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const photo = photos[index];
  const many = photos.length > 1;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    if (!dialog.open) dialog.showModal();
    document.documentElement.classList.add('no-scroll');
    return () => {
      document.documentElement.classList.remove('no-scroll');
      previouslyFocused?.focus?.();
    };
  }, []);

  const go = (step: number) => onIndexChange((index + step + photos.length) % photos.length);

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (!many) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={`Foto ampliada: ${photo.caption}`}
      onClose={onClose}
      onCancel={onClose}
      onKeyDown={onKeyDown}
    >
      <div
        className="lightbox__stage"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <button type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Fechar foto ampliada">
          <X aria-hidden="true" size={26} />
        </button>

        {many && (
          <button type="button" className="lightbox__btn lightbox__prev" onClick={() => go(-1)} aria-label="Foto anterior">
            <ChevronLeft aria-hidden="true" size={28} />
          </button>
        )}

        <figure className="lightbox__figure">
          <SafeImage src={assetUrl(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} loading="eager" />
          <figcaption>
            {photo.caption}
            {many && (
              <span aria-live="polite">
                {' '}
                · {index + 1} de {photos.length}
              </span>
            )}
          </figcaption>
        </figure>

        {many && (
          <button type="button" className="lightbox__btn lightbox__next" onClick={() => go(1)} aria-label="Próxima foto">
            <ChevronRight aria-hidden="true" size={28} />
          </button>
        )}
      </div>
    </dialog>
  );
}
