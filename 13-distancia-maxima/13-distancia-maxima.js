const input =
    "3\n0 0\n0 3\n4 0\n"

const input2 =
    "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7\n"

function distancia(input) {

    const linhas = input.trim().split("\n");
    const n = parseInt(linhas[0]);
    
    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0]),
            y: parseFloat(coord[1])
        })
    }
    
    let distancia;
    let distanciaMax = 0;
    
    for (let coor1 = 0; coor1 < n; coor1++) {
        for (let coor2 = coor1; coor2 < n; coor2++) {
            distancia = Math.sqrt(Math.pow(coordenadas[coor2].x - coordenadas[coor1].x, 2) + Math.pow(coordenadas[coor2].y - coordenadas[coor1].y, 2));
            distanciaMax = distancia > distanciaMax ? distancia : distanciaMax;
        }
    }
    console.log(distanciaMax);
}

distancia(input);
distancia(input2);