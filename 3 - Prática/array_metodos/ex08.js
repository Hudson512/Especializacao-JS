var dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ]

function calculaAreaTotal(dimensoes){
    return dimensoes.reduce(function(soma, valor){
        return soma + (valor.altura * valor.comprimento);
    },0);
}

let soma = calculaAreaTotal(dimensoes);
console.log(soma);