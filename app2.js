const {gets, print } = require('./function-aux')

const n = gets();
let maiorPar = 0

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0 ) {
        if (numero > maiorPar){
            maiorPar = numero;
        }
    }
}

print(maiorPar);

let menorImpar = 0
for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0 ) {
        if (numero < menorImpar){
            menorImpar = numero;
        }
    }
}
print(menorImpar);
