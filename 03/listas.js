    // let lista = [1,2,3,4,5];
    // let lista2 = ['carro', true, 99, [1,2,3]];

    // console.log(lista);
    // console.log(lista2);
    // console.log(lista[4]);
    // console.log(lista2[3]);
    // console.log(lista2[3][1]);

    // let notasAlumno = [90,85,65];

    let listaNombres =[];
    console.log(listaNombres);
    listaNombres.push('Pedro');
    console.log(listaNombres);
    listaNombres.push('Pablo');
    console.log(listaNombres);
    console.log(typeof(listaNombres));
    // TYPEOF tipo de archivo con el que estamos trabajando (solo en consola!!!)

    let listaOtrosNombres = ['Luis', 'Ricardo', 'Marias'];
    // listaNombres = listaNombres+listaOtrosNombres; (NO SE DEBE HACER)
    // Forma correcta_____________ ... llama al objeto
    listaNombres.push(...listaOtrosNombres);// ... (tres puntos) se llaman OPERADOR DE PROPAGACION
    console.log(listaNombres);
    console.log(typeof(listaNombres));

    let masNombres = ['Tiziana', 'Daniela', 'Andres'];

    // listaNombres.push(masNombres[0]);
    // listaNombres.push(masNombres[1]);
    // listaNombres.push(masNombres[2]);

    //_________________METODOS y OPERADORES__________________________

    // 1 push() METODO que agrega elementos en la lista
    listaNombres.push(...masNombres);
    console.log(listaNombres);

    // 2 .pop() METODO que elimina el ultimo elemento de una lista 
    listaNombres.pop();
    console.log(listaNombres);

    // 3 .shift() METODO que elimina el primer elemento de una lista
    listaNombres.shift();
    console.log(listaNombres);

    // 4 delete este OPERADOR elimina un elemento de la lista, pero deja ese espacio vacio, se le puede indicar la posicion del arreglo que se desea eliminar
    delete listaNombres[3];
    console.log(listaNombres);
    console.log(typeof(listaNombres[3]));

    // 5 splice() este METODO nos permite eliminra elementos en cualquier posicion de la lista, indicando el indice de inicio y la cantidad de elementos a eliminar
    listaNombres.splice(0,2);
    console.log(listaNombres);

    // 6 ... (tres puntos) se llaman OPERADOR DE PROPAGACION
    listaNombres.push(...listaOtrosNombres);
    console.log(listaNombres);

    // Un elemento ITERABLE ("recorrer elemento x elemento de un INDICE")