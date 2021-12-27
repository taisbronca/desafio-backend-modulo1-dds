let compra1 = [150, 50];
let compra2 = [100, 100, 100];
let compra3 = [200, 150, 50, 100];

function solucao(precos) {
    //ver quantidade de itens
    //se quantidade de itens <= 2, soma itens e da o valor
    //se quantidade de itens > 2, precisa procurar, dentre a quantidade de itens, o item de menor valor e entao aplicar o desconto nesse item.
    //somar itens de nova array
    
    let somaItens = 0;
    let menorPreco = precos[0];
      
    for (let itemAtual of precos) {
        somaItens += itemAtual;
          
        if (itemAtual < menorPreco) {
              menorPreco = itemAtual;
        }
    }
    if (precos.length > 2) {
        console.log(somaItens - (menorPreco * 0.5));
    } else {
        console.log(somaItens);
    }
}

solucao(compra1);
solucao(compra2);
solucao(compra3);
