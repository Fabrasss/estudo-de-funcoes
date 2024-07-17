function myFunction(x, y) {
    if (y === undefined) {
        y = 2
    }
    return x * y
}
console.log(myFunction(2))

function myFunction2(x, y = 20) {
    return x + y
}

console.log(myFunction2(10))