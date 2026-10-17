import { MessageCircle } from 'lucide-react';
import { modalities } from '../config/site';
import { whatsappUrl } from '../lib/contact';
import { assetUrl } from '../lib/format';
import Button from './Button';
import DraftNotice from './DraftNotice';
import Reveal from './Reveal';
import SafeImage from './SafeImage';
import SectionHeading from './SectionHeading';

export default function ModalitiesSection() {
  return (
    <section id="modalidades" className="section section--tint" aria-labelledby="modalidades-title">
      <div className="container">
        <SectionHeading id="modalidades-title" eyebrow="Modalidades" title="Atividades aquáticas" center>
          Escolha uma modalidade e converse com a Água Viva para saber sobre turmas, níveis e horários.
        </SectionHeading>

        <ul className="cards">
          {modalities.map((m, i) => (
            <Reveal as="li" key={m.id} delay={i * 90} className="card">
              <div className="card__media">
                <SafeImage
                  src={m.image ? assetUrl(m.image) : undefined}
                  alt={m.imageAlt ?? `Espaço reservado para a foto de ${m.name}`}
                  fallbackLabel="Foto da modalidade em breve"
                />
              </div>
              <div className="card__body">
                <h3>{m.name}</h3>
                <p>{m.description}</p>
                <Button
                  href={whatsappUrl(
                    `Olá! Conheci o site da Água Viva e gostaria de consultar informações sobre ${m.name}.`,
                  )}
                  external
                  variant="outline"
                  small
                  icon={<MessageCircle aria-hidden="true" size={18} />}
                  aria-label={`Consultar informações sobre ${m.name} pelo WhatsApp`}
                >
                  Consultar informações
                </Button>
              </div>
            </Reveal>
          ))}
        </ul>

        <DraftNotice>
          Descrições provisórias. Faixas etárias, níveis, turmas e valores devem ser confirmados pelo proprietário antes
          de serem divulgados.
        </DraftNotice>
      </div>
    </section>
  );
}
