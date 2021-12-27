function solucao(min, km) {
    
    let valorKm = 0;
    let valorMin = 0;
    
    let custoMinViagem = 50;
    let descontoMin = 30;
    let custoKmViagem = 70;
    let descontoKm = 50;
    
    if (min <= 20) {
        valorMin = min * custoMinViagem;
    } else {
        valorMin = (20 * custoMinViagem) + ((min - 20) * descontoMin);
    }
    
    if (km <= 10) {
        valorKm = km * custoKmViagem;
    } else {
        valorKm = (10 * custoKmViagem) + ((km - 10) * descontoKm);
    }
    
    let valorTotal = valorMin + valorKm;
    console.log(valorTotal);
}

solucao(25, 11.5);
solucao(25, 10);
solucao(20, 11.5);
solucao(20, 10);