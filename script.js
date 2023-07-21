let a = null;
let b = null;
let result = null;
let operator = "";
let nextOperator = "";
let newInput = true;

const operationDisplay = document.getElementById("operationDisplay");
const display = document.getElementById("textDisplay");
const allClear = document.getElementById("allClear");
const clear = document.getElementById("clear");
const del = document.getElementById("backspace");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const equal = document.getElementById("equal");
const operatorButton = document.getElementsByClassName("operatorButton");

allClear.addEventListener("click", function () {
    a = null;
    b = null;
    result = null;
    newInput = true;
    operator = "";
    nextOperator = "";
    display.textContent = "0";
    operationDisplay.textContent = "";
});

clear.addEventListener("click", function () {
    display.textContent = "0";
});

del.addEventListener("click", function () {
    if (display.textContent == "0" ||  display.textContent.length == 1)
    {
        display.textContent = "0";
    }
    else {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
});

one.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "1";
});

two.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "2";
});

three.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "3";
});

four.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "4";
});

five.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "5";
});

six.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "6";
});

seven.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "7";
});

eight.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "8";
});

nine.addEventListener("click", function (){
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += "9";
});

zero.addEventListener("click", function (){
    if (newInput == false)
    {
    display.textContent += "0";
    }
    else{
        display.textContent = "0";
    }
});

const operate = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

//need to use objects for operators for easy refactoring and overall code design
function calculate() {

    //used switch statement for cleaner code
    switch (this.textContent) {
        case "+":
            nextOperator = "+";
            break;
        case "-":
            nextOperator = "-";
            break;
        case "x":
            nextOperator = "*";
            break;
        case "÷":
            nextOperator = "/";
            break;
        default:
            break;
    }

    //clean slate    
    if (!a && !b && !operator) 
    {
        a = Number(display.textContent);
        newInput = true;
        operator = nextOperator;
        operationDisplay.textContent = `${a} ${operator}`;
    }
    
    //if operator is clicked after equal
    else if (!a && result)
    {
        a = result;
        result = null;
        newInput = true;
        operator = nextOperator;
        operationDisplay.textContent = `${a} ${operator}`;
        display.textContent = "0";
    }

    //if operator is clicked again after operator
    else if (a)
    {
        b = Number(display.textContent);
        a = operate[operator](a, b);
        display.textContent = a;
        newInput = true;
        operator = nextOperator;
        operationDisplay.textContent = `${a} ${operator}`;
        display.textContent = "0";
    }
};

add.addEventListener("click", calculate);
subtract.addEventListener("click", calculate);
multiply.addEventListener("click", calculate);
divide.addEventListener("click", calculate);

equal.addEventListener("click", function() {
    if(a)
    {
        b = Number(display.textContent);
        result = operate[operator](a, b);
        a = null;
        display.textContent = result;
        newInput = true;
        operationDisplay.textContent += ` ${b} =`;
    }
    else if (!a && result)
    {
        operationDisplay.textContent = `${result} ${operator} ${b} =`;
        result = operate[operator](result, b);
        display.textContent = result;
        newInput = true;
    }
});