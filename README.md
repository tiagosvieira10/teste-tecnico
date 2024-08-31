# Teste Técnico

## Respostas

### Questão 1

def fibonacci(num):
    a, b = 0, 1
    
    if num == 0 or num == 1:
        return True

    while b < num:
        a, b = b, a + b

    return b == num

number = int(input("Informe um número: "))

if fibonacci(number):
    print(f"O número {number} pertence à sequência de Fibonacci.")
else:
    print(f"O número {number} NÃO pertence à sequência de Fibonacci.")


### Questão 2 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string: ', (texto) => {
    verificarLetraA(texto);
    rl.close();  
});

function verificarLetraA(str) {
    
    let palavra = str.toLowerCase();
    
    let count = 0;
    
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === 'a') {
            count++;
        }
    }
    
    if (count > 0) {
        console.log(`A letra 'a' ocorre ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

### Questão 3

#include <stdio.h>

int main() {
    int INDICE = 12;
    int SOMA = 0;
    int K = 1;
    
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    
    printf("%d\n", SOMA);
    return 0;
}

Ao final do loop quando SOMA = 77

### Questão 4 

a) 9
b) 128
c) 49
d) 100
e) 13
f) 20

### Questão 5

Ligo um dos interruptoes espero um tempo, desligo e ligo outro interruptor. Vou até a sala, a lampada desligada e quente é o primeiro interruptor que liguei, a lampada ligada correponde ao segundo interruptor ligado, restanto apenas a lampada desligada e fria para o interruptor que não foi acionado.
