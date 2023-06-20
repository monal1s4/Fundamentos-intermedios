function duplicarElementos(arr) {
    const duplicados = [];

    for (let i = 0; i < arr.length; i++) {
        duplicados.push(arr[i]);
        duplicados.push(arr[i]);
    }

    return duplicados;
}
const array = [4, "Ulysses", 42, false];
console.log(duplicarElementos(array));