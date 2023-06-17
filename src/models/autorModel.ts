interface Autor {
    id: number;
    nombre: string;
    // Otros campos del autor
  }
  
  const autores: Autor[] = [
    { id: 1, nombre: 'Autor 1' },
    { id: 2, nombre: 'Autor 2' },
    // Otros autores
  ];
  
  export const autorModel = {
    getAll: () => {
      return autores;
    },
  
    getById: (id: number) => {
      return autores.find((autor) => autor.id === id);
    },
  
    create: (autor: Autor) => {
      autores.push(autor);
    },
  
    update: (id: number, autor: Autor) => {
      const index = autores.findIndex((autor) => autor.id === id);
      if (index !== -1) {
        autores[index] = autor;
      }
    },
  
    delete: (id: number) => {
      const index = autores.findIndex((autor) => autor.id === id);
      if (index !== -1) {
        autores.splice(index, 1);
      }
    },
  };
  