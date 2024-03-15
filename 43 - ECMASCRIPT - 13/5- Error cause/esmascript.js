function Sample(param1){
try{
    return param1();
}catch(error){
    throw Error("Error de ejemplo para la codeKata", {cause: error});
}
}

try{
    Sample(1234);
}catch(e){
    console.info(e);
    console.info(e.cause);
}
