class Sample{
    static #address = "Mi propiedad privada estatica";

    static methodSample(){
        console.log(Sample.#address);
    }
}

let instance = Sample.methodSample();