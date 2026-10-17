import { siteConfig } from '../config/site';

const { address, phone } = siteConfig;

export function whatsappUrl(message: string = siteConfig.whatsapp.defaultMessage): string {
  return `https://wa.me/${phone.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:${phone.e164}`;

export const addressLine = `${address.street} — ${address.neighborhood}, ${address.city} — ${address.state}`;
export const addressWithCep = `${addressLine}, CEP ${address.postalCode}`;

const mapQuery = encodeURIComponent(
  `${address.street}, ${address.neighborhood}, ${address.city} - ${address.state}, ${address.postalCode}`,
);

/** Mapa incorporado (não exige chave de API). */
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
/** Abre o Google Maps (app ou site) já com a rota até o endereço. */
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
