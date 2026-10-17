import { openingHours, SCHEMA_DAYS, siteConfig } from '../config/site';

/**
 * Dados estruturados (schema.org) para SEO local, gerados a partir de src/config/site.ts.
 * Não inclui avaliações, notas ou preços.
 */
export default function StructuredData() {
  const { address, phone } = siteConfig;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: siteConfig.name,
    telephone: phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: 'BR',
    },
    openingHoursSpecification: openingHours.flatMap((day) =>
      day.periods.map(([opens, closes]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SCHEMA_DAYS[day.weekday],
        opens,
        closes,
      })),
    ),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
