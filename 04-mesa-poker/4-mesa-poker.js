const minimo = 2;
const maximo = 10;
const lista = [0, 5, 6, 10, 11];

function solucao(min, max, valores) {
    
    let valoresPermitidos = [];
      
    for (let numeros of valores) {
        if (numeros >= min && numeros <= max) {
            valoresPermitidos.push(numeros);
            }
    }
    console.log(valoresPermitidos);
}

solucao(minimo, maximo, lista);