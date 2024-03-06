import { kebabCase } from 'lodash';

let title = 'Olá, mundo! É um prazer ter vocês aqui.';

const kebabCaseTitle = kebabCase(title);

alert(kebabCaseTitle);


const hoje = new Date();

const diaAniversario = parseInt(prompt(`Digite o dia do seu aniversário`));
const mesAniversario = parseInt(prompt(`Digite o mês do seu aniversário`));

const dataAniversario = new Date(hoje.getFullYear(), mesAniversario - 1, diaAniversario);
const diferencaDias = Math.floor((dataAniversario - hoje) / (1000 * 60 * 60 * 24));
const diferencaMeses = Math.floor(diferencaDias / 30.44);

alert(`Diferença em dias: ${diferencaDias}`);
alert(`Diferença em meses: ${diferencaMeses}`);

console.log(`${dataAniversario}`);
