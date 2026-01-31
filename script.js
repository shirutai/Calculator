
const calculator = document.querySelector(".calculator");
let calcScreen = document.getElementById("screen");
let clearBtn = document.querySelector(".clearBtn")
let first = "";
let second = "";
let operator = "";
function screenShow (btn){
    btn = btn.target;
    operBtn = btn.classList.contains("oper");
    equalBtn = btn.classList.contains("equal");
    if(btn.tagName !== "BUTTON") return;
    if((operBtn || equalBtn) && second != "" && operator != ""){
        first = calculate(first, second, operator);
        calcScreen.value = first;
        second = "";
        if(operBtn){
            operator = btn.textContent;
        }
        return;
    };
    if(operBtn){
        operator = btn.textContent;
        return;
    };
    if(second === "" && equalBtn){
        return;
    };
    if(operator != "" && !operBtn){
        second += btn.textContent;
        calcScreen.value = second;
        return;
    };
    if(operator === "" && !operBtn && !equalBtn){
        first += btn.textContent;
        calcScreen.value = first;
        return;
    };
}
function clean (){
    first = "";
    second = "";
    operator = "";
    calcScreen.value = "";
}
clearBtn.addEventListener("click", clean);
calculator.addEventListener("click", screenShow);
function calculate(a, b, oper){
    a = Number(a);
    b = Number(b);
    switch (oper) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            if(a === 0 || b === 0){
                clean();
                alert("bruh lmao, u know u can't do that right?");
                return "";
            } else{return a / b;}
            break;
        default:
            return
            break;
    };
};



