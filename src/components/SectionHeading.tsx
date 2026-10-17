import type { ReactNode } from 'react';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}

export default function SectionHeading({ id, eyebrow, title, children, center = false }: SectionHeadingProps) {
  return (
    <div className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
