const frase = prompt("Escreva uma frase simples");

if(frase.length>40){
    alert(`Irmão, eu te pedi uma frase simples, essa aí tem ${frase.length} caracteres já.`);
    alert(`Você utilizou uma frase grande demais, portanto você será redirecionado para outra página! :p`);
    window.location.href = "./index.html"
} else{
    alert(`Você sabia que esse seu exemplo possui apenas ${frase.length} caracteres? Essa frase é simples de fato!`);
    alert(`Obrigado por colaborar com os nossos serviços! Você será agora automaticamente redirecionado a nossa página principal`)
    window.location.href = "./content.html"
}

