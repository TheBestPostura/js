/*
Local storage, estructura
*/


//Guarda un elemento
localStorage.setItem("myCat", "Tom");

//Obtiene elemento por clave
const cat = localStorage.getItem("myCat");

//Elimina un elemento por su clave
localStorage.removeItem("myCat");

//Limpia todo el local storage del navegador
localStorage.clear();

