function add(a, b) {
    let soma = a + b
    return soma
}

console.log(add(2, 4))

function multiply(c, d) {
    let multiplicacao = 0
    for (let i = 0; i < d; i++) {
        multiplicacao = add(c, multiplicacao)
    }
    return multiplicacao
}

console.log(multiply(6, 8))


function power(e, f) {
    let potencia = 1
    for (let i = 0; i < f; i++) {
        potencia = multiply(e, potencia)
    }
    return potencia
}

console.log(power(2, 8))

function factorial(x) {
    let fac = 1
    for(let i = 1; i <= x; i++) {
        fac = multiply(fac, i)
    }
    return fac
}

console.log(factorial(4))