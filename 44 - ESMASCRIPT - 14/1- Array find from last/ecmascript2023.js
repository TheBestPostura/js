let enumeracion = [1, 2, 3, 4, 65];

//Metodo para revertir el orden del array
enumeracion.toReversed();

//Para ordenar el array
enumeracion.toSorted();

//Ejemplo para ordenar los numeros pares primeros
enumeracion.toSorted((a, b) => (a % b ) ? 1 : -1);


//Para eliminar una posicion de un array o reemplazar
enumeracion.toSpliced(1, 1);

//Cambia un valor por una posicion del array
enumeracion.With(0, false)