function ultimoElementoN(arr, n) {
    if (arr.length < n || n < 1) {
        return null;
    }

    return arr[arr.length - n];
}
const array = [5, 2, 3, 6, 4, 9, 7];
console.log(ultimoElementoN(array, 3)); 