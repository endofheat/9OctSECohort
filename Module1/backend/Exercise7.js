/* Exercise 4 */

const { error } = require("console")

// this function returns the sum of two numbers
function add(addNum1, addNum2) {
    return addNum1 + addNum2
}
console.log(add(234, 429))

// test
if(add(3,6)!=9) {throw Error("Addition function failed")}
if(add(-2,9)!=7) {throw Error("Addition function failed")}
if(add(-10,10)!=0) {throw Error("Addition function failed")}

// this function returns the subtracting of two numbers
function sub(subNum1, subNum2) {
    return subNum1 - subNum2
}
console.log(sub(23049,2346))

// test
if(sub(99,33)!=66) {throw Error("Subtraction function failed")}
if(sub(-50,50)!=100) {throw Error("Subtraction function failed")}
if(sub(-100,-100)!=0) {throw Error("Subtraction function failed")}

// this function returns the multiplying of two numbers
function multi(multiNum1, multiNum2) {
    return multiNum1 * multiNum2
}
console.log(multi(33,22))

// test
if(multi(11,9)!=99) {throw Error("Multiplication function failed")}
if(multi(-50,-50)!=2500) {throw Error("Multiplication function failed")}
if(multi(0,0)!=0) {throw Error("Multiplication function failed")}



// this function returns the dividing of two numbers
function div(divNum1, divNum2) {
    return divNum1 / divNum2
}
console.log(div(936, 6))

// test
if(div(66,22)!=3) {throw Error("Division function failed")}
if(div(-50,-50)!=1) {throw Error("Division function failed")}
if(div(0,0)!=0) {throw Error("Division function failed")}