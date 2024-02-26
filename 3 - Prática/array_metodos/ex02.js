var arr = [1,2,3,4,5];

function dobrar (arr_num) {
    return arr_num.map(function (num){
        return num * 2;
    })
}

var arr2 = dobrar(arr);
arr2.forEach(num => {
    console.log(num);
});