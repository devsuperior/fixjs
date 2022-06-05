const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));

let cont = 0;
let soma = 0;

for (let i=0; i<dados.length; i++) {
    if (dados[i] > 0) {
        soma = soma + dados[i];
        cont = cont + 1;
    }
}

if (cont === 0) {
    console.log("IMPOSSIVEL CALCULAR");
}
else {
    const media = soma / cont;
    console.log(media.toFixed(2));
}
