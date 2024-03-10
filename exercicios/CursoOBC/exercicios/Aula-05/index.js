const carro = { 
    modelo: "Model S",
    passageiros: 0,
    limiteDePassageiros: 5,
    velocidade: 0,
}

function aumentarVelocidade(carro, velocidade){
    const velocidadeConst = carro.velocidade = velocidade
    return velocidadeConst
}

function adcPassageiro(carro, passageiros){
    if(carro.velocidade > 0 || passageiros > carro.limiteDePassageiros){
        console.log(`Não foi possível adicionar o passageiro`);
    } else{
        console.log(`O passageiro foi adicionado`);
        carro.passageiros = passageiros
    }
    console.log(carro);
}

aumentarVelocidade(carro, 1);
adcPassageiro(carro, 2);