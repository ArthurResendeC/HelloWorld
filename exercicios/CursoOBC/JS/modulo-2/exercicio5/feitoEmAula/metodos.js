let pessoa = {
    nome: "Isaac",
    idade: 26,
    dizeOla(){
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa);
pessoa.dizeOla()