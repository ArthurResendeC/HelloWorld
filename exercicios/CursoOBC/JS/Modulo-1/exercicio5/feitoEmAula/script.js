let velocidade = 90

do {
    alert("A velocidade atual do veículo é " + velocidade + "km/h")
    velocidade -= 20
    alert("A velocidade foi diminuída em 20km/h...")
} while (velocidade > 0);

alert("Velocidade final: " + velocidade + "km/h")