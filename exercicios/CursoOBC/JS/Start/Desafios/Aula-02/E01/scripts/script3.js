function calculate(){
    let num1 = prompt(`Digite um número`);
let num2 = prompt(`Digite um outro número (igual ou não, não importa)`);

num1 = parseInt(num1);
num2 = parseInt(num2);

let num3 = num1 + num2;
let num4 = num1 - num2;
let num5 = num1 / num2;
let num6 = num1 * num2;

alert(`${num1} + ${num2} = ${num3}!\n${num1} - ${num2} = ${num4}!\n${num1} / ${num2} = ${num5}\n${num1} * ${num2} = ${num6}!`);
}
