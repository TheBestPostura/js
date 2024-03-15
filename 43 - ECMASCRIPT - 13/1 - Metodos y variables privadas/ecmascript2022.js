//Crear una propiedad privada

class Sample{
    #name;
    
    constructor(firtname){
        this.#name = firtname;
    }


    //Metodo privado
    #methodSample(){
        console.log(this.#name);
    }

}

let instance = new Sample("Moises");

console.log(instance);


