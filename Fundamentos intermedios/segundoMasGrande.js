function segundoElementoMasGrande(arr) {
    if (arr.length < 2) {
        return null;
    }

    arr.sort(function (a, b) {
        return b - a;
    });

    return arr[1];
}
const array = [42, 1, 4, 3.14, 7];
console.log(segundoElementoMasGrande(array));