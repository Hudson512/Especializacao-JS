let numeros = [];

function isListaVazia(arr){
    return arr[Symbol.iterator]().next().done;
}
console.log(isListaVazia(numeros));