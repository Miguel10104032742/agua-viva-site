import { Activity, Droplets, Smile, Waves, type LucideIcon } from 'lucide-react';
import { benefits, benefitsDisclaimer, type IconName } from '../config/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const ICONS: Record<IconName, LucideIcon> = {
  activity: Activity,
  smile: Smile,
  waves: Waves,
  droplets: Droplets,
};

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="section" aria-labelledby="beneficios-title">
      <div className="container">
        <SectionHeading id="beneficios-title" eyebrow="Por que a água?" title="Benefícios das atividades aquáticas" center />
        <ul className="benefits">
          {benefits.map((b, i) => {
            const Icon = ICONS[b.icon];
            return (
              <Reveal as="li" key={b.title} delay={i * 70} className="benefit">
                <span className="benefit__icon">
                  <Icon aria-hidden="true" size={26} />
                </span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            );
          })}
        </ul>
        <p className="fineprint">{benefitsDisclaimer}</p>
      </div>
    </section>
  );
}
