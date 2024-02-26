function calculaDistancia(arr){
    let iteradorRuas = arr[Symbol.iterator]();
    console.log(iteradorRuas);
    let distanciaTotal = 0;
    let rua = iteradorRuas.next();
    do {
        distanciaTotal += rua.value.tamanho;
        rua = iteradorRuas.next();
    } while (!rua.done);
    return distanciaTotal;
}

var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
];
console.log(calculaDistancia(ruas));