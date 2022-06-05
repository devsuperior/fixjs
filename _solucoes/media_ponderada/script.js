const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));

const media = (dados[0] * 2 + dados[1] * 3 + dados[2] * 5) / 10;

console.log(media.toFixed(1));
