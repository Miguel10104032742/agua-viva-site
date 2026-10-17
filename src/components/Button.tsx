import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'light' | 'ghost-light' | 'outline';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  small?: boolean;
  icon?: ReactNode;
  /** Abre em nova aba com atributos de segurança. */
  external?: boolean;
}

/** Link com aparência de botão (todos os botões do site navegam ou abrem links). */
export default function Button({
  variant = 'primary',
  small = false,
  icon,
  external = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a
      className={`btn btn--${variant}${small ? ' btn--sm' : ''} ${className}`.trim()}
      {...externalProps}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
