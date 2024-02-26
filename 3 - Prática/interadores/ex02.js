function soletraPalavra(palavra){
    let interadorPalavra = palavra[Symbol.iterator]();
    let letra = interadorPalavra.next();
    do {
        console.log(letra.value);
        letra = interadorPalavra.next();
    } while (!letra.done);
}
console.log(soletraPalavra("Angola"));