let idades = [12, 18, 27];

function solucao(lista) {
      
    let podeEntrar = [];
      
    for (let idade of lista) {
        if (idade >= 18) {
            podeEntrar.push(idade);
        }
    }
    if (!podeEntrar.length) {
          console.log("CRESCA E APARECA");
    } else {        
        let maisJovem = podeEntrar[0];
        for (let i = 1; i < podeEntrar.length; i++) {  
          
            if (podeEntrar[i] < maisJovem) {
            maisJovem = podeEntrar[i];
            }
        }
    console.log(maisJovem);
    }   
}

solucao(idades);