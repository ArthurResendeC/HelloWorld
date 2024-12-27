let lado
let altura
let base
let baseMenor
let baseMaior
let resultado
let raio

function mostrarMenu(){
    let menu = "===== Calculadora Geométrica =====\n"
    menu += "1. Calcular área do triângulo\n"
    menu += "2. Calcular área do quadrado\n"
    menu += "3. Calcular área do trapézio\n"
    menu += "4. Calcular área do círculo\n"
    menu += "5. Sair\n"
    menu += "===============================\n";

    const opcao = parseInt(prompt(menu))

    switch(opcao){
        case 1: 
            base = parseFloat(prompt("Qual o valor da base do triângulo?"))
            altura = parseFloat(prompt("Qual o valor da altura do triângulo?"))
            areaTriangulo(base,altura)
            break
        case 2:
            lado = parseFloat(prompt("Qual o valor do lado do quadrado?"))
            areaQuadrado(lado)
            break
        case 3:
            baseMenor = parseFloat(prompt("Qual o valor da base menor do trapézio?"))
            baseMaior = parseFloat(prompt("Qual o valor da base maior do trapézio?"))
            altura = parseFloat(prompt("Qual a altura do trapézio?"))
            areaTrapezio(baseMenor, baseMaior, altura)
            break
        case 4:
            raio = parseFloat(prompt("Qual o raio do círculo?"))
            areaCirculo(raio)
            break
        case 5:
            alert("Saindo do programa...")
            return
        default:
            alert("Opção inválida!")
            break
    };
    mostrarMenu();
}


function areaTriangulo(base, altura){
    resultado = (base * altura) / 2
    alert(`O triângulo de base igual a ${base}m e altura igual a ${altura}m tem como área: ${resultado}m²`)
}
function areaQuadrado(lado){
    resultado = lado**2
    alert(`O quadrado de lado ${lado}m tem como área: ${resultado}m²`)
}
function areaTrapezio(baseMenor, baseMaior, altura){
    resultado = (baseMaior + baseMenor)* altura / 2
    alert(`A altura do trapézio de bases ${baseMaior}m e ${baseMenor}m e altura ${altura} é ${resultado}m²`)
}
function areaCirculo(raio){
    resultado = 3,14 * raio**2
    alert(`Considerando π como 3,14, a área do cículo com raio de ${raio}m é igual a ${resultado}m²`)
}

mostrarMenu();