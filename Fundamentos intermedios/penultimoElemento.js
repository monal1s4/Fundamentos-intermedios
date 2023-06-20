function penultimoElemento(arr) {
    if (arr.length < 2) {
        return null;
    }

    return arr[arr.length - 2];
}
const arreglo = [42, true, 4, "Liam", 7];
console.log(penultimoElemento(arreglo));