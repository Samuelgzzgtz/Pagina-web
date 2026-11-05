// Teléfonos de México guardados como 10 dígitos, sin espacios ni lada internacional.

// Ciudad de México, Guadalajara y Monterrey usan lada de 2 dígitos; el resto, de 3.
const LADAS_CORTAS = ['55', '56', '33', '81'];

export function formatearTelefono(tel: string): string {
  const corta = LADAS_CORTAS.includes(tel.slice(0, 2));
  return corta
    ? `${tel.slice(0, 2)} ${tel.slice(2, 6)} ${tel.slice(6)}`
    : `${tel.slice(0, 3)} ${tel.slice(3, 6)} ${tel.slice(6)}`;
}

export const enlaceLlamada = (tel: string) => `tel:+52${tel}`;

export function enlaceWhatsApp(tel: string, mensaje?: string): string {
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
  return `https://wa.me/52${tel}${texto}`;
}
