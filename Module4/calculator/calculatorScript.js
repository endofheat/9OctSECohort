function add() {
    let addNum1 = parseInt(document.getElementById("num1").value);
    let addNum2 = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerText = addNum1 + addNum2; 
    
}

function sub() {
    let subNum1 = parseInt(document.getElementById("num1").value);
    let subNum2 = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerText = subNum1 - subNum2;
    
}

function multi() {
    let mulNum1 = parseInt(document.getElementById("num1").value);
    let mulNum2 = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerText = mulNum1 * mulNum2;
    
}

function divide() {
    let divNum1 = parseInt(document.getElementById("num1").value);
    let divNum2 = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerText = divNum1 / divNum2;
    
}

function reset() {
    document.getElementById("result").innerText = 0;
}