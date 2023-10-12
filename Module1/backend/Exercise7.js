/* Exercise 4 */

const { error } = require("console")

// this function returns the sum of two numbers
function add(addNum1, addNum2) {
}

// test
if(add(3,6)!=9) {error}
if(add(-2,9)!=7) {error}
if(add(-10,10)!=0) {error}

// code
function add(addNum1, addNum2) {
    return addNum1 + addNum2
}
console.log(add(234, 429))

// this function returns the subtracting of two numbers
function sub(subNum1, subNum2) {
}

// test
if(sub(99,33)!=66) {error}
if(sub(-50,50)!=100) {error}
if(sub(-100,-100)!=0) {error}

function sub(subNum1, subNum2) {
    return subNum1 - subNum2
}
console.log(sub(23049,2346))

// this function returns the multiplying of two numbers
function multi(multiNum1, multiNum2) {
}

// test
if(multi(11,9)!=99) {error}
if(multi(-50,-50)!=2500) {error}
if(multi(0,0)!=0) {error}

function multi(multiNum1, multiNum2) {
    return multiNum1 * multiNum2
}
console.log(multi(33,22))

// this function returns the dividing of two numbers
function div(divNum1, divNum2)  {
}

// test
if(div(66,22)!=3) {error}
if(div(-50,-50)!=1) {error}
if(div(0,0)!=0) {error}

function div(divNum1, divNum2) {
    return divNum1 / divNum2
}
console.log(div(936, 6))