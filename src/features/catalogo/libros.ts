import { getCollection, type CollectionEntry } from 'astro:content';

export type Libro = CollectionEntry<'libros'> & { autor: CollectionEntry<'autores'> };

// Todos los libros con su autor ya resuelto, del más nuevo al más antiguo.
export async function obtenerLibros(): Promise<Libro[]> {
  const [libros, autores] = await Promise.all([getCollection('libros'), getCollection('autores')]);
  const porId = new Map(autores.map((a) => [a.id, a]));
  return libros
    .map((libro) => {
      const autor = porId.get(libro.data.autor.id);
      if (!autor) throw new Error(`El libro "${libro.id}" apunta a un autor que no existe: ${libro.data.autor.id}`);
      return { ...libro, autor };
    })
    .sort((a, b) => b.data.anio - a.data.anio || a.data.titulo.localeCompare(b.data.titulo, 'es'));
}

// Mensaje que se precarga al pedir un libro por WhatsApp o correo.
export const mensajePedido = (libro: Libro) =>
  `Hola, me interesa el libro "${libro.data.titulo}" de ${libro.autor.data.nombre}.`;
