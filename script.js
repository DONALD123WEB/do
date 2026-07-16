let firstNumber = "";
let secondNumber = "";
let operator = "";
let waitingForSecond = false;

const display = document.getElementById("display");

function appendNumber(num){

    if(!waitingForSecond){
        firstNumber += num;
        display.value = firstNumber;
    }else{
        secondNumber += num;
        display.value = secondNumber;
    }

}

function setOperator(op){

    if(firstNumber === "") return;

    operator = op;
    waitingForSecond = true;

}

function calculate(){

    if(firstNumber === "" || secondNumber === "") return;

    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let result;

    switch(operator){

        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            if(b === 0){
                display.value = "Error";
                return;
            }
            result = a / b;
            break;
    }

    display.value = result;

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    waitingForSecond = false;

}

function clearDisplay(){

    firstNumber = "";
    secondNumber = "";
    operator = "";
    waitingForSecond = false;
    display.value = "";

}