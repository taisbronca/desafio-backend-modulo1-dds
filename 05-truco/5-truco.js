let cartaPraCima = "K";

function solucao(carta) {
    const cartas = ["Q", "J", "K", "A", "2", "3"];
    
    for (let i = 0; i < cartas.length; i++) {
        if (cartas[i] === carta) {
            if (carta === cartas[cartas.length - 1]) {
                console.log(cartas[0]);
            } else {
                console.log(cartas[i + 1]);
            }
        }
    }
}

solucao(cartaPraCima);