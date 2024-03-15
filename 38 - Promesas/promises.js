/**Estados de una promesa */
/**
   1º- Pending -> promesa pendiente
   2º- FullFilled -> promesa cumplida
   3º- Rejected -> promesa incumplida
 */

   /**Estructura */

let aynAction = new Promise((resolve, reject) => {
    const RANDOM_RESULT = Math.random() < 0.5;

    if(RANDOM_RESULT){
        setTimeout(() => {resolve("Cumplida")}, 1000);
    
    }else {
        reject("Incumplida");
    }
});

aynAction.then(
    fullfilled =>{
        console.log(fullfilled);
    },
    reject =>{
        console.log(reject);
    }
);
aynAction
    .then()
    .then(prevpromise => console.log(`Second then ${prevpromise}`))
    .then(prevpromise => console.log(`We are finish`))
    .catch(error =>{
        console.log(error);
    })
    .finally(() =>{
        //Do some actions here...
    })
