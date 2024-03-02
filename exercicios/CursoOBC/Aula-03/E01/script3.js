let num1 = prompt(`Digite um número`);
let num2 = prompt(`Digite um outro número (igual ou não, não importa)`);

num1 = parseInt(num1);
num2 = parseInt(num2);

let num3 = num1 + num2;
let num4 = num1 - num2;
let num5 = num1 / num2;
let num6 = num1 * num2;


alert(`A soma entre os dois números é ${num3}!`);
alert(`O resto da operação entre os dois números é ${num4}!`);
alert(`O quociente da operção entre os dois números é ${num5}!`);
alert(`O produto da operação entre os dois números é ${num6}!`);
