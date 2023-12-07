const add = (req, res) => {
    let firstNum = parseInt(req.query.num1);
    let secondNum = parseInt(req.query.num2);
    let addResult = firstNum + secondNum;
    console.log(addResult);
    res.status(200);
    res.json({result: addResult});
}

const subtract = (req, res) => {
    let firstNum = parseInt(req.query.num1);
    let secondNum = parseInt(req.query.num2);
    let subResult = firstNum - secondNum;
    console.log(subResult);
    res.status(200);
    res.json({result: subResult});
}

const multiply = (req, res) => {
    let firstNum = parseInt(req.query.num1);
    let secondNum = parseInt(req.query.num2);
    let mulResult = firstNum * secondNum;
    console.log(mulResult);
    res.status(200);
    res.json({result: mulResult});
}

const divide = (req, res) => {
    let firstNum = parseInt(req.query.num1);
    let secondNum = parseInt(req.query.num2);
    let divResult = firstNum / secondNum;
    console.log(divResult);
    res.status(200);
    res.json({result: divResult});
}

module.exports = {
    add, subtract, multiply, divide
}