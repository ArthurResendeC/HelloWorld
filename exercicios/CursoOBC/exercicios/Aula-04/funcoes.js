let numero = parseFloat(prompt(`Escolha um número qualquer e descubra o dobro dele:`))
export function dobro() {
    let resultado = numero * 2;
    alert(`O dobro de ${numero} é ${resultado}`)
}
export function operacoes(){
    let numero2 = parseInt(prompt(`Escolha novamente um número qualquer`))
    let numero3 = parseInt(prompt(`Agora escolha um número para ser somado ou subtraído do escolhido anteriormente`))
    let escolha = parseInt(prompt(`Se deseja somar digite 1\nSe deseja subtrair digite 2`))

    if (escolha == 1 ) {
        let resultadoSoma = numero2 + numero3;
        alert(`${numero2} + ${numero3} = ${resultadoSoma}`);
    } else if (escolha == 2 ) {
        let resultadoSub = numero2 - numero3; 
        alert(`${numero2} - ${numero3} = ${resultadoSub}`);
    } else {
        // Ação para entrada inválida
        alert("Entrada inválida. Digite 1 ou 2.");
}
}