console.log('Hello World')

function sayHello() {
    console.log('Hello')
}

function sum(a, b) {
    return a + b
}
console.log(sum(5, 1))

/* Exercise 4 */
function add(addNum1, addNum2) {
    return addNum1 + addNum2
}
console.log(add(234, 429))

function sub(subNum1, subNum2) {
    return subNum1 - subNum2
}
console.log(sub(23049,2346))

function multi(multiNum1, multiNum2) {
    return multiNum1 * multiNum2
}
console.log(multi(33,22))

function div(divNum1, divNum2) {
    return divNum1 / divNum2
}
console.log(div(936, 6))

// console.log("What's your name?")
// let name = input("Input here: ")
// console.log(`Hello${name}`)

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('What\'s your name?: ', function(name) {
    console.log(`Hello ${name}`)
    rl.close()
})

rl.on('close',function() {
    process.exit(0)
})
