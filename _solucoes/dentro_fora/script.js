const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));

let contFora = 0;
let contDentro = 0;

for (let i=0; i<dados.length; i++) {
    if (dados[i] >= 10 && dados[i] <= 20) {
        contDentro = contDentro + 1;
    }
    else {
        contFora = contFora + 1;
    }
}

console.log(`${contDentro} dentro`);
console.log(`${contFora} fora`);
