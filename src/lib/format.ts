import { openingHours, type DayHours, type Period } from '../config/site';

/** "08:00" -> "08h" | "08:30" -> "08h30" */
export function formatTime(time: string): string {
  const [h, m] = time.split(':');
  return m && m !== '00' ? `${h}h${m}` : `${h}h`;
}

export function formatPeriods(periods: readonly Period[]): string {
  if (periods.length === 0) return 'Fechado';
  return periods.map(([a, b]) => `${formatTime(a)}–${formatTime(b)}`).join(' e ');
}

/** Agrupa dias seguidos com o mesmo horário (ex.: "Seg–Sex"), para o rodapé. */
export function groupedHours(): { label: string; hours: string }[] {
  const groups: { days: DayHours[]; hours: string }[] = [];
  for (const day of openingHours) {
    const hours = formatPeriods(day.periods);
    const last = groups[groups.length - 1];
    if (last && last.hours === hours) last.days.push(day);
    else groups.push({ days: [day], hours });
  }
  return groups.map(({ days, hours }) => ({
    label: days.length === 1 ? days[0].label : `${days[0].short}–${days[days.length - 1].short}`,
    hours,
  }));
}

export const assetUrl = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

/** Converte "images/a.webp 800w, images/b.webp 1600w" respeitando o BASE_URL. */
export const assetSrcSet = (srcSet: string): string =>
  srcSet
    .split(',')
    .map((part) => {
      const [url, size] = part.trim().split(/\s+/);
      return `${assetUrl(url)} ${size}`.trim();
    })
    .join(', ');
