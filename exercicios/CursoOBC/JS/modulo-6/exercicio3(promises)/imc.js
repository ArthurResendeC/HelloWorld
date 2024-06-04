function imc(altura, peso) {
    return new Promise((resolve, reject) => {
        if (isNaN(altura) || isNaN(peso)) {
            reject(`Os parâmetros devem ser dados em formatos numéricos válidos!`);
        } else if (altura <= 0 || peso <= 0) {
            reject(`Os parâmetros devem ser maiores que zero!`);
        } else {
            const imc = peso / (altura * altura);
            resolve(imc);
        }
    });
}

function resultado(altura, peso) {
    imc(altura, peso)
        .then(imc => {
            console.log(`O IMC é ${imc.toFixed(2)}`);

            if (imc < 18.5) {
                console.log("Estado de magreza! " + imc.toFixed(2));
            } else if (imc >= 18.5 && imc < 24.9) {
                console.log("Normal");
            } else {
                console.log(`Acima do peso normal`);
            }
            console.log(`Promise resolvida`);
        })
        .catch(erro => {
            console.log(`Erro: ${erro}`);
            console.log(`Promise rejeitada`);
        });
}

resultado(1.60, 48);
resultado(1.50, "texto")
