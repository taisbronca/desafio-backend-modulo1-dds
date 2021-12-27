let texto = " Cuidado, pois usuarios     as vezes deixam espacos vazios no fim  do texto sem querer ";

function solucao(texto) {
    //usar trim para nao contar espacos no inicio e final
    
    let palavrasSemEspaco = texto.trim().split(" ");
    let resultado = 0;
    
    for (let palavra of palavrasSemEspaco) {
        if(palavra !== "") {
        resultado++;
        }
    }
    console.log(resultado)
}

solucao(texto);
