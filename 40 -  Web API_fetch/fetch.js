/**
 Estructura de una API FETCH
 */

 async function logJSONData(){
    const response = await fetch("http://example.com/movies,json");
    const jsonData = await response.json();
    console.log(jsonData);
 }


 /**
 INTERFAZ DE FETCH
 */

 let url = "https://resource-to-get.com/ids/for/sample";

 let options = {
    method: "GET", // *GET, POST, PUT, DELETE, ECT.
    headers: {
        'Conten-Type': "application/json"
        //'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: "cors",
    body: JSON.stringify({}),
    credentias: "same-origin" 
 };

 fetch(url, options);

 fetch(new Request(url, options));


  /**
 Manejo de respuesta fetch
 */

 const response = await fetch(url, options);

 response.status; // Propiedad para obtener el codigo de la repsuesta 200, 300, 400, 500...
 response.headers; //Propiedad para obtener los headers de las respuestas

 response.json(); // Metodo para obtener la respuesta en JavaScript obcjet
 response.text(); // Metodo para obtener la respuesta en raw, bruto