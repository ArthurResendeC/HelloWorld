const nome = prompt("Qual é o seu nome?")
let age = prompt("Quantos anos você tem?")

age = parseInt(age)

if(age>=18){
    alert(`Olá ${nome}, visto que você já tem ${age} anos, você será automaticamente redirecionado ao nosso site!`);
    window.location.href = "./content.html"
} else{
    alert(`Lamento ${nome}, mas visto que você tem apenas ${age} anos, você não pode acessar nosso site sem uma autorização do FBI.`);
}
