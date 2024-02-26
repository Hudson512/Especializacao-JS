// Par ou impar?

var numeros = [0,1,2,3,4,5,6,7,8,9];
numeros.forEach(function(num){
    if (num % 2 == 0)
    {
        console.log(num + ' é par');
    }
    else
    {
    console.log(num + ' é ímpar')
    }
});