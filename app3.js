const {gets, print } = require('./function-aux3');

const salarioBruto = gets();
const valorBeneficios = gets();

function receitaLiquida() {
    
    if (salarioBruto >= 0 && salarioBruto <= 1100) {
        let salarioLiquido = ((salarioBruto-(salarioBruto *0.05)))
        console.log( salarioLiquido + valorBeneficios)
    }
    else if (salarioBruto > 1100 && salarioBruto <= 2500) {
        let salarioLiquido = ((salarioBruto-(salarioBruto *0.10)))
        console.log( salarioLiquido + valorBeneficios)
    } else {
        let salarioLiquido = ((salarioBruto-(salarioBruto *0.15)))
        console.log( salarioLiquido + valorBeneficios)
    }
}


print('O valor a ser transferido é :' + receitaLiquida() )