/** Marca provisória (ondas). Troque pelo logotipo oficial em Header.tsx / siteConfig.logo. */
export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="15" fill="#0A2A4A" />
      <path d="M10 27c5.5-6 11-6 16.5 0s11 6 16.5 0 8-4.5 11-3" fill="none" stroke="#7DD3E2" strokeWidth="5" strokeLinecap="round" />
      <path d="M10 42c5.5-6 11-6 16.5 0s11 6 16.5 0 8-4.5 11-3" fill="none" stroke="#5FD3B3" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
