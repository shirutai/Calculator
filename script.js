function add(a, b){
    return a + b;
};
function sub(a, b){
    return a - b;
};
function multiply(a, b){
    return a * b;
};
function divide(a, b){
    return a / b;
};
let result = 0;
function calculate(a, b, oper){
    switch (oper) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return sub(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return
            break;
    }
};


