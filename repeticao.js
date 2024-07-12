// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.
let proceed = true;
let counter0_25 = 0;
let counter26_50 = 0;
let counter51_75 = 0;
let counter76_100 = 0;

while (proceed) {
    let input = +prompt('Digite um valor:')
    if (input < 0) {
        proceed = false;
    } else if (input <= 25) {
        counter0_25++;
    } else if (input <= 50) {
        counter26_50++;
    } else if (input <= 75) {
        counter51_75++;
    } else if (input <= 100) {
        counter76_100++;
    }
}

alert(`
    Resultado:
    - Foram digitados ${counter0_25} números de 0 a 25
    - Foram digitados ${counter26_50} números de 26 a 50
    - Foram digitados ${counter51_75} números de 51 a 75
    - Foram digitados ${counter76_100} números de 76 a 100
`)