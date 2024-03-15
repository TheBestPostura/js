function ballThrow(){
    return new Promise((resolve, reject) =>{
        const hits = Math.round(Math.random() * 10);
        const time = Math.round(Math.random() * 2000);
    
        if(hits > 0){
            setTimeout(() =>resolve(hits), time);
        } else{
            setTimeout(() => reject(hits), time);
        }
    });
}

let turn = ballThrow();

turn.then(
    hits => { 
        if(hits == 9){
            console.log(`Strikee !!! XXX`);
        }else{
            console.log(`Hemos tirado ${hits} bolos`);
        }
    },
    fail => { 
        console.error(`No has tirado nada!! ${hits}`);
    }

);