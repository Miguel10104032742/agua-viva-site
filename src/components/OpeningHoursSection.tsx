import { CalendarClock, Info } from 'lucide-react';
import { hoursNotice, openingHours, siteConfig } from '../config/site';
import { whatsappUrl } from '../lib/contact';
import { formatPeriods } from '../lib/format';
import { useTodayWeekday } from '../hooks/useToday';
import Button from './Button';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function OpeningHoursSection() {
  const today = useTodayWeekday();

  return (
    <section id="horarios" className="section" aria-labelledby="horarios-title">
      <div className="container hours">
        <SectionHeading id="horarios-title" eyebrow="Horários" title="Horários de funcionamento">
          Confira os dias e horários em que a Água Viva está aberta.
        </SectionHeading>

        <Reveal className="hours__panel">
          <table className="hours__table">
            <caption className="sr-only">Horários de funcionamento por dia da semana</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">Horário</th>
              </tr>
            </thead>
            <tbody>
              {openingHours.map((day) => {
                const isToday = today === day.weekday;
                const closed = day.periods.length === 0;
                return (
                  <tr
                    key={day.weekday}
                    className={`${isToday ? 'is-today' : ''}${closed ? ' is-closed' : ''}`.trim()}
                    aria-current={isToday ? 'date' : undefined}
                  >
                    <th scope="row">
                      {day.label}
                      {isToday && <span className="today-badge">Hoje</span>}
                    </th>
                    <td>{formatPeriods(day.periods)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="hours__notice">
            <Info aria-hidden="true" size={20} />
            <span>{hoursNotice}</span>
          </p>

          <Button
            href={whatsappUrl(siteConfig.whatsapp.scheduleMessage)}
            external
            icon={<CalendarClock aria-hidden="true" size={20} />}
          >
            Consultar horários das aulas
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
