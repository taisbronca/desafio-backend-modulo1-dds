let cofre = [2, 3, 4];

function solucao(lista) {
  //somar a lista e dividir pela quantidade de itens na lista
  
  let soma = 0;
  
  for (let i = 0; i < lista.length; i++) {
      soma += lista[i];
  }
  let media = soma / lista.length;
  console.log(media);
}

solucao(cofre);