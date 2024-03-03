function inicio(){
let price = prompt("Qual o preço do produto?");
let discount = prompt("Qual a porcentagem de desconto? (digite o número sem o sinal de porcentagem)");

discount = parseFloat(discount / 100);
let discountResult = price - (discount * price);
let discountValue = price - discountResult;

alert(`O preço final do produto em questão deve ser R$${discountResult}\nJá o valor do desconto é de R$${discountValue}`);

}


