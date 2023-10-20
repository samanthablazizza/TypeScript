const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
const arrayCombinado = [...array01, ...array02];

console.log(arrayCombinado);

let valor = array02[1] //posição 1 do array02
console.log(valor)

function somarNumeros(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(somarNumeros());
console.log(somarNumeros(10, 20));
console.log(somarNumeros(10, 20, 30));