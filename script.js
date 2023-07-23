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
const decimal = document.getElementById("decimal");
let decimalLock = false;

allClear.addEventListener("click", function () {
    a = null;
    b = null;
    result = null;
    newInput = true;
    operator = "";
    nextOperator = "";
    display.textContent = "0";
    operationDisplay.textContent = "";
    decimalLock = false;
});

clear.addEventListener("click", function () {
    display.textContent = "0";
    newInput = true;
    decimalLock = false;
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

decimal.addEventListener("click", function (){
    if (decimalLock == false)
    {
        newInput = false;
        display.textContent += ".";
    }
    newInput = false;
    decimalLock = true;
});

//function created for all number buttons
function numberButton() {
    if (newInput == true)
    {
        display.textContent = "";
        newInput = false;
    }
    display.textContent += this.textContent; 
}

one.addEventListener("click", numberButton);
two.addEventListener("click", numberButton);
three.addEventListener("click", numberButton);
four.addEventListener("click", numberButton);
five.addEventListener("click", numberButton);
six.addEventListener("click", numberButton);
seven.addEventListener("click", numberButton);
eight.addEventListener("click", numberButton);
nine.addEventListener("click", numberButton);

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
    "÷": (a, b) => a / b
}

//need to use objects for operators for easy refactoring and overall code design
function calculate() {
    //this.style.backgroundColor = "gray";
    //this.style.border = "solid black 5px";

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
            nextOperator = "÷";
            break;
        default:
            break;
    }

    //clean slate    
    if (!a && !b && !operator) 
    {
        decimalLock = false;
        a = Number(display.textContent);
        display.textContent = "0";
        newInput = true;
        operator = nextOperator;
        operationDisplay.textContent = `${a} ${operator}`;
    }
    
    //if operator is clicked after equal
    else if (!a && result || a == 0)
    {
        decimalLock = false;
        a = result;
        result = null;
        newInput = true;
        operator = nextOperator;
        operationDisplay.textContent = `${a} ${operator}`;
        display.textContent = "0";
    }

    //if operator is clicked again after operator
    else if (a || a == 0)
    {
        decimalLock = false;
        b = Number(display.textContent);
        a = Number(operate[operator](a, b).toFixed(2));
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
    if(a || a == 0)
    {
        b = Number(display.textContent);
        result = Number(operate[operator](a, b).toFixed(2));
        a = null;
        display.textContent = result;
        newInput = true;
        operationDisplay.textContent += ` ${b} =`;
        if (display.textContent.includes(".") == false)
        {
            decimalLock = false;
        }
        decimalLock = true;
    }
    else if (!a && result || a == 0)
    {
        operationDisplay.textContent = `${display.textContent} ${operator} ${b} =`;
        result = Number(operate[operator](+display.textContent, b).toFixed(2));
        display.textContent = result;
        newInput = true;
        if (display.textContent.includes(".") == false)
        {
            decimalLock = false;
        }
    }
});