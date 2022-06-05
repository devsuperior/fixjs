const dados = [
  {
    nome: "Maria Silva",
    valorHora: 80.0,
    horasTrabalhadas: 20,
    terceirizado: true,
  },
  {
    nome: "João Rocha",
    valorHora: 60.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
  {
    nome: "Tiago James",
    valorHora: 80.0,
    horasTrabalhadas: 10,
    terceirizado: true,
  },
  {
    nome: "Ana Carla",
    valorHora: 70.0,
    horasTrabalhadas: 40,
    terceirizado: true,
  },
  {
    nome: "Pedro Paulo",
    valorHora: 50.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
];

//---------------------------------------------------------------------------
// FUNCAO funcionariosTerceirizados
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna uma lista contendo somente os funcionários terceirizados
//---------------------------------------------------------------------------

function funcionariosTerceirizados(list) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].terceirizado) {
      result.push(list[i]);
    }
  }
  return result;
}

// Solução com função de alta order:
function funcionariosTerceirizados2(list) {
  return list.filter((x) => x.terceirizado);
}

//---------------------------------------------------------------------------
// FUNCAO custoTotal
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna um número representando o custo total dos funcionários
//---------------------------------------------------------------------------

function custoTotal(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    const subTotal = list[i].valorHora * list[i].horasTrabalhadas;
    total = total + subTotal;
  }
  return total;
}

// Solução com função de alta ordem:
function custoTotal2(list) {
  return list
    .map((x) => x.valorHora * x.horasTrabalhadas)
    .reduce((x, y) => x + y, 0);
}

//---------------------------------------------------------------------------
// SCRIPT PRINCIPAL
//---------------------------------------------------------------------------

const terceirizados = funcionariosTerceirizados(dados);

const custoTerceirizados = custoTotal(terceirizados);

console.log(`Custo total dos funcionários terceirizados: R$ ${custoTerceirizados.toFixed(2)}`);
