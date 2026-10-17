import { useState, type ImgHTMLAttributes } from 'react';
import { Waves } from 'lucide-react';

interface SafeImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src?: string;
  alt: string;
  /** true para a imagem principal da página (carrega primeiro). */
  priority?: boolean;
  /** Texto mostrado quando não há imagem ou ela não carrega. */
  fallbackLabel?: string;
}

/** Imagem com tratamento de erro: se não existir ou falhar, mostra um espaço reservado. */
export default function SafeImage({
  src,
  alt,
  className = '',
  priority = false,
  fallbackLabel = 'Imagem indisponível',
  ...rest
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div role="img" aria-label={alt} className={`img-fallback ${className}`}>
        <Waves aria-hidden="true" size={34} />
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  // srcSet e loading vêm antes de src para o navegador escolher a imagem certa na primeira requisição.
  return (
    <img
      {...rest}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
      onError={() => setFailed(true)}
      src={src}
    />
  );
}
