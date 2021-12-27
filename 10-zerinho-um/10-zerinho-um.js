const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

function solucao(jogadores) {
    
    const jogaramZero = [];
    const jogaramUm = [];
      
    for (let jogador of jogadores) {
          
        if (jogador.jogada === 0) {
            jogaramZero.push(jogador);
        } else {
            jogaramUm.push(jogador);
        }
    }
    if (jogaramZero.length === 1) {
        console.log(jogaramZero[0].nome);
    } else if (jogaramUm.length === 1) {
        console.log(jogaramUm[0].nome);
    } else {
        console.log("NINGUEM");
    }
}

solucao(jogadores);