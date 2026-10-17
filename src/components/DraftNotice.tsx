import { Info } from 'lucide-react';
import { siteConfig } from '../config/site';

/** Aviso de conteúdo provisório. Some quando siteConfig.draftMode = false. */
export default function DraftNotice({ children }: { children: string }) {
  if (!siteConfig.draftMode) return null;
  return (
    <p className="draft-notice">
      <Info aria-hidden="true" size={16} />
      <span>{children}</span>
    </p>
  );
}
