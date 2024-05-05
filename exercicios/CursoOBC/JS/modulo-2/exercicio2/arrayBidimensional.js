const arr = [
    "1º nível",
    [
        "2º nível", 42, true
    ],
    [
        ["3º nível", "Olá, mundo!"],
        ["3º nível, 2º item", "Olá, pessoas!"]
    ],
    [
        "Teceiro array"
    ]
]

console.log(arr);
console.log(arr[0]); // Vai exibir o "'1º nível'"
console.log(arr[1]); // Vai exibir o "'2º nível, 42, true'"
console.log(arr[1][0]); // Vai exibir somente a string "2º nível"
console.log(arr[2]); // Vai exibir os dois arrays que estão dentro do 2º array
console.log(arr[2][1][0]); // Vai exibir o a string "3º nível, 2º item" que está dentro do 2º array que está dentro do 2º array em relação ao arr
console.log(arr[3]); // Vai exibir o terceiro array que está vazio

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(matriz)

// Iterando dentro de matrizes: 
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const element = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + element)
    }   
}
