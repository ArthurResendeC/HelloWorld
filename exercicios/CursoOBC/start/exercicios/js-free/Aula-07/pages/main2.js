console.log("Stating script...");

const myPromise = new Promise((resolve, reject) => {
    if(true){
        reject("Promise has been rejected!")
    }  
    else{
        setTimeout(() => {
            console.log("Executing promise");    
            resolve("Promise has been solved!")
        }, 2 * 1000);
    }
})

console.log(myPromise);

myPromise.then(function (resultado) { //Para quando ela for resolvida
    console.log(resultado);
})
myPromise.catch(function (motivo) {   //Para quando ela for rejeitada
    console.log(motivo);
})

console.log("Finishing script...");
