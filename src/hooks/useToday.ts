import { useEffect, useState } from 'react';
import { siteConfig } from '../config/site';

const NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/** Dia da semana (0 = domingo) no fuso do estabelecimento, ou null se não for possível calcular. */
function weekdayInTimeZone(): number | null {
  try {
    const name = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      timeZone: siteConfig.timeZone,
    }).format(new Date());
    const index = NAMES.indexOf(name);
    return index === -1 ? null : index;
  } catch {
    return null;
  }
}

/** Retorna null até o navegador calcular a data (evita destacar o dia errado). */
export function useTodayWeekday(): number | null {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(weekdayInTimeZone());
    const id = window.setInterval(() => setToday(weekdayInTimeZone()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return today;
}
