import type { ClaveEstado } from '../../data/estados';

export type Contacto = { nombre: string; zona: string; telefono: string; correo: string; whatsapp: boolean };

// Lo que el servidor le pasa al mapa del navegador.
export type DatosMapa = {
  red: Partial<Record<ClaveEstado, Contacto[]>>;
  central: Contacto;
  estados: Record<ClaveEstado, string>;
};
