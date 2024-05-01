
let resultado
mostrarMenu()
function mostrarMenu(){
    let numeroMedida = prompt(`Qual o valor da medida em metros a ser convertida?`)
    if(!isNaN(numeroMedida)){
        let unidadeAConvertir =  prompt("Qual a unidade desejada?\nMilímetro(mm);\nCentímetro(cm);\nDecímetro(dm);\nDecâmetro(dam);\nHectômetro(hm);\nQuilômetro(km)")
        switch (unidadeAConvertir) {
            case "mm":
                resultado = numeroMedida * 1000;
                alert(`A conversão de ${numeroMedida}m para milímetro é = ${resultado}mm!`)
                break;
            case "cm":
                resultado = numeroMedida * 100;
                alert(`A conversão de ${numeroMedida}m para centímetro é = ${resultado}cm!`)
                break
            case "dm":
                resultado = numeroMedida * 10;
                alert(`A conversão de ${numeroMedida}m para decímetro é = ${resultado}dm!`)
                break
            case"dam":
                resultado = numeroMedida / 10;
                alert(`A conversão de ${numeroMedida}m para decâmetro é = ${resultado}dam!`)
                break
            case "hm":
                resultado = numeroMedida / 100;
                alert(`A conversão de ${numeroMedida}m para hectômetro é = ${resultado}hm!`)
                break
            case "km":
                resultado = numeroMedida / 1000
                alert(`A conversão de ${numeroMedida}m para quilômetro é = ${resultado}km!`)
                break
            default:
            alert("Opção inválida, digite a sigla da unidade desejada que se encontrar na lista de opções!");
        }
    } else {
        alert("Opção inválida! Digite um número que não contenha consigo a unidade de medida(que nesse caso, por padrão, sempre será metros). ")
        mostrarMenu()
    }
}
