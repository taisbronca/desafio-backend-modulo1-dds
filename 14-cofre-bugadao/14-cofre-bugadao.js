const input = "cubos\ncuggbyos\n"
const input2 = "cubos \n  ewvelrabsocaeln\n"

function solucao(input) {
    
    //removendo espaços e quebras de linha
    const linhas = input.trim().split("\n");
    const senha = linhas[0];
    let digitos = linhas[1];
    
    //varrendo o string da senha, verificando se a mesma letra exite no array digitos(senha digitada errada)
    for (let item of senha) {
        const indice = digitos.indexOf(item);
        
        //se a letra não é encontrada, o indexOf retorna -1, após return encerra , cofre nao abre
        if (indice === -1) {
            console.log("NAO");
            return;

            //usando o substr para modificar o array que comecará a partir do proximmo indice
        } else {
            digitos = digitos.substr(indice);
        }
    }
    //Se encontrar todas as letras na ordem correta, o programa imprimira "SIM", cofre abre
    console.log("SIM");
}

solucao(input)
solucao(input2)