let numeros1 = [1, 3, 2, 1];
let numeros2 = [1, 1, 1];

function solucao(numeros) {
   
   let soma = 0;
   let jogador = [0];

   for (let i = 0; i < numeros.length; i++) {
       soma += numeros[i];
   }
   if (soma % numeros.length === 0) {
       console.log(numeros.length);
   } else {    
   console.log(soma % numeros.length);
   }
}

solucao(numeros1);
solucao(numeros2);