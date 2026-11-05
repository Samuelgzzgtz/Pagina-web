import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CLAVES_COLECCION } from './data/editorial';
import { CLAVES_ESTADO } from './data/estados';

const telefono = z.string().regex(/^\d{10}$/, 'Usa 10 dígitos sin espacios, por ejemplo 8112345678');

// Un archivo Markdown por libro. El texto debajo de los campos es la sinopsis.
const libros = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/libros' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      autor: reference('autores'),
      coleccion: z.enum(CLAVES_COLECCION),
      // Color de la portada tipográfica. Se ignora si hay foto de portada.
      color: z.enum(['azul', 'naranja', 'blanco', 'cielo']),
      portada: image().optional(),
      anio: z.number().int(),
      paginas: z.number().int().optional(),
      isbn: z.string().optional(),
      // Las novedades salen en el abanico y la primera como libro destacado en Inicio.
      novedad: z.boolean().default(false),
    }),
});

// Un archivo Markdown por autor. El texto debajo de los campos es la biografía.
const autores = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/autores' }),
  schema: z.object({
    nombre: z.string(),
    ciudad: z.string().optional(),
  }),
});

// Quién atiende cada estado en el mapa. Un estado puede tener varias personas.
const colaboradores = defineCollection({
  loader: file('./src/content/colaboradores.json'),
  schema: z.object({
    estado: z.enum(CLAVES_ESTADO),
    nombre: z.string(),
    zona: z.string(),
    telefono,
    correo: z.email(),
    whatsapp: z.boolean().default(true),
  }),
});

export const collections = { libros, autores, colaboradores };
