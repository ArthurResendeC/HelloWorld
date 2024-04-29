import { kebabCase } from 'lodash';

let title = 'Olá, mundo! É um prazer ter vocês aqui.';

const kebabCaseTitle = kebabCase(title);

alert(kebabCaseTitle);


const hoje = new Date();

const diaAniversario = prompt("Digite o dia do seu aniversário:");
const mesAniversario = prompt("Digite o mês do seu aniversário (1-12):");

const dataAniversario = new Date(hoje.getFullYear(), mesAniversario - 1, diaAniversario);

if (dataAniversario < hoje) {
dataAniversario.setFullYear(dataAniversario.getFullYear() + 1);
}

const diferencaDias = Math.floor((hoje - dataAniversario) / (1000 * 60 * 60 * 24));

const diferencaMeses = Math.floor(diferencaDias / 30.44);

alert(`Diferença em dias: ${Math.abs(diferencaDias)}`);
alert(`Diferença em meses: ${Math.abs(diferencaMeses)}`);