async function imc(altura, peso) {
    if (isNaN(altura) || isNaN(peso)) {
        return Promise.reject(`Arguments must be a number!`)
    } else if (altura <= 0 || peso <= 0) {
        return Promise.reject(`Arguments must be a number!`)
    } else {
        const imc = peso / (altura * altura);
        return Promise.resolve(imc)
    }
}

async function resultado(altura, peso) {
    try {
        const imcValue = await imc(altura, peso);
        console.log(`O IMC é ${imcValue.toFixed(2)}`);

        if (imcValue < 18.5) {
            console.log("Estado de magreza! " + imcValue.toFixed(2));
        } else if (imcValue >= 18.5 && imcValue < 24.9) {
            console.log("Normal");
        } else {
            console.log(`Acima do peso normal`);
        }
        console.log(`Promise resolvida`);
    } catch (erro) {
        console.log(erro);
        console.log(`Promise rejeitada`);
    }
}

resultado(1.60, 48);
resultado(1.50, "texto");
