function clonaObjeto(alvo){
    let propriedade = Object.getOwnPropertyNames(alvo);
    let copy = {};
    propriedade.forEach(element => {
        copy[element] = alvo[element];
    });
    return copy;
}
var org = {
    nome: 'Hudson', 
    idade: 23, 
    sexo: 'M'
};
var copy = clonaObjeto(org);
console.log(copy);