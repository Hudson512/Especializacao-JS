function calculaRaizesQuadradas(arr){
    return arr.map(function(valor){
        return Math.sqrt(valor);
    });
}

var arr = calculaRaizesQuadradas([8, 16, 25]);
console.log(arr);