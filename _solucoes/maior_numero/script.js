const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));

console.log(dados);

let maior = dados[0];
for (let i=1; i<dados.length; i++) {
    if (dados[i] > maior) {
        maior = dados[i];
    }
}

console.log(maior);
