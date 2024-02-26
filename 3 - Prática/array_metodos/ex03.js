var arr = ["oi", "bom", "dia"];

function caps (arr_string){
    return arr_string.map(_string => {
        return _string.toUpperCase();
    })
}

var arr1 = caps(arr);
arr1.forEach(element => {
    console.log(element);
});