var produtos = [
    { nome:'Cereal', preco:'10', dataValidade:'2017/02/21' },
    { nome:'Suco de Abacaxi', preco:'12', dataValidade:'2017/01/20' },
    { nome:'Torta de frango', preco:'25', dataValidade:'2017/07/07' }
  ]

function existeProdutosDatados(produtos, data)
{
   let datareferencia = new Date();
   if(data) datareferencia = new Date(data);
   return produtos.some(function(produto){
        return new Date(produto.dataValidade) < datareferencia;
   });
}
console.log(existeProdutosDatados(produtos, '2017-02-01'));

