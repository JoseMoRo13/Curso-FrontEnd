// crear una funcion que busque libros entre un periodo de ano determinado y que devuelva la lista de los mismos.

    let biblioteca = [
        { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", añoDePublicacion: 1967 },
        { id: 2, titulo: "1984", autor: "George Orwell", añoDePublicacion: 1949 },
        { id: 3, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", añoDePublicacion: 1943 },
        { id: 4, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", añoDePublicacion: 1813 },
        { id: 5, titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald", añoDePublicacion: 1925 },
        { id: 6, titulo: "Matar a un ruiseñor", autor: "Harper Lee", añoDePublicacion: 1960 },
        { id: 7, titulo: "La Divina Comedia", autor: "Dante Alighieri", añoDePublicacion: 1320 },
        { id: 8, titulo: "Hamlet", autor: "William Shakespeare", añoDePublicacion: 1603 },
        { id: 9, titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", añoDePublicacion: 1954 },
        { id: 10, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", añoDePublicacion: 1605 },
        { id: 11, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", añoDePublicacion: 1997 },
        { id: 12, titulo: "El Hobbit", autor: "J.R.R. Tolkien", añoDePublicacion: 1937 },
        { id: 13, titulo: "Guerra y Paz", autor: "Lev Tolstói", añoDePublicacion: 1869 },
        { id: 14, titulo: "La Metamorfosis", autor: "Franz Kafka", añoDePublicacion: 1915 },
        { id: 15, titulo: "Los Miserables", autor: "Victor Hugo", añoDePublicacion: 1862 },
        { id: 16, titulo: "Crimen y Castigo", autor: "Fiodor Dostoievski", añoDePublicacion: 1866 },
        { id: 17, titulo: "Jane Eyre", autor: "Charlotte Brontë", añoDePublicacion: 1847 },
        { id: 18, titulo: "El Código Da Vinci", autor: "Dan Brown", añoDePublicacion: 2003 },
        { id: 19, titulo: "El Alquimista", autor: "Paulo Coelho", añoDePublicacion: 1988 },
        { id: 20, titulo: "Anna Karenina", autor: "Lev Tolstói", añoDePublicacion: 1877 },
        { id: 21, titulo: "Fahrenheit 451", autor: "Ray Bradbury", añoDePublicacion: 1953 },
        { id: 22, titulo: "La Sombra del Viento", autor: "Carlos Ruiz Zafón", añoDePublicacion: 2001 },
        { id: 23, titulo: "El nombre del viento", autor: "Patrick Rothfuss", añoDePublicacion: 2007 },
        { id: 24, titulo: "Los Juegos del Hambre", autor: "Suzanne Collins", añoDePublicacion: 2008 },
        { id: 25, titulo: "To Kill a Mockingbird", autor: "Harper Lee", añoDePublicacion: 1960 }
      ];

      let libroBuscado = [];

      function buscaLibros(inicio,fin,arreglo){
        for(i=0; i<arreglo.length; i++){
          if(arreglo[i].añoDePublicacion >= inicio && arreglo[i].añoDePublicacion <= fin){
            libroBuscado.push(arreglo[i])
          }
        }
        console.log(libroBuscado);
      };
      buscaLibros(1847,1847,biblioteca);