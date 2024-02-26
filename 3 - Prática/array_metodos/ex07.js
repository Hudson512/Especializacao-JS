var lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]

function buscar(propriedade, valor, obj){
    return obj.find(function (busca){
        return busca[propriedade] === valor;
    });
}

var arr =  buscar('nome', 'Tânia', lista)
console.log(arr);