const dados = document.getElementById("dados").innerHTML;

const N = Number(dados);

for (let i=1; i<=10; i++) {
    const produto = i * N;
    console.log(`${N} x ${i} = ${produto}`);
}
