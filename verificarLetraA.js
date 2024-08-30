const readline = require('readline');

// Interface para capturar a entrada do usuário via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string: ', (texto) => {
    verificarLetraA(texto);
    rl.close();  
});

function verificarLetraA(str) {
    // Converte tudo para minúsculo
    let palavra = str.toLowerCase();
    
    // Inicializa a contagem 
    let count = 0;
    
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === 'a') {
            count++;
        }
    }
    
    // Verifica quantide de 'a' na string
    if (count > 0) {
        console.log(`A letra 'a' ocorre ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}