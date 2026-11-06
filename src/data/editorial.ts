// Datos generales de la editorial. Son de ejemplo hasta tener los reales.
export const EDITORIAL = {
  lema: 'Libros que se quedan contigo.',
  descripcion: 'Narrativa, ensayo, poesía y libros infantiles hechos en México.',
  correo: 'contacto@dt5.mx',
  telefono: '8100000000',
  ciudad: 'Monterrey, Nuevo León',
  fundacion: 2010,
  redes: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;

export const COLECCIONES = {
  narrativa: 'Narrativa',
  ensayo: 'Ensayo',
  infantil: 'Infantil y juvenil',
  poesia: 'Poesía',
} as const;

export type Coleccion = keyof typeof COLECCIONES;

export const CLAVES_COLECCION = Object.keys(COLECCIONES) as [Coleccion, ...Coleccion[]];
