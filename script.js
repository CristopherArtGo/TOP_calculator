let a = null;
let b = null;
let result = null;
let operator = "";
let newInput = true;

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

allClear.addEventListener("click", function () {
    a = null;
    b = null;
    result = null;
    newInput = true;
    operator = "";
    display.textContent = "0";
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

add.addEventListener("click", function () {
    operator = "add";
    //clean slate
    if (!a && !b) 
    {
        a = Number(display.textContent);
        newInput = true;
    }
    
    //if plus is clicked after equal
    else if (!a && result)
    {
        a = result;
        result = null;
        newInput = true;
    }

    //if plus is clicked again after plus
    else if (a)
    {
        b = Number(display.textContent);
        a += b;
        display.textContent = a;
        newInput = true;
    }
});

subtract.addEventListener("click", function () {
    operator = "subtract";
    //clean slate
    if (!a && !b) 
    {
        a = Number(display.textContent);
        newInput = true;
    }
    
    //if plus is clicked after equal
    else if (!a && result)
    {
        a = result;
        result = null;
        newInput = true;
    }

    //if plus is clicked again after plus
    else if (a)
    {
        b = Number(display.textContent);
        a -= b;
        display.textContent = a;
        newInput = true;
    }
});

multiply.addEventListener("click", function () {
    operator = "multiply";
    //clean slate
    if (!a && !b) 
    {
        a = Number(display.textContent);
        newInput = true;
    }
    
    //if plus is clicked after equal
    else if (!a && result)
    {
        a = result;
        result = null;
        newInput = true;
    }

    //if plus is clicked again after plus
    else if (a)
    {
        b = Number(display.textContent);
        a *= b;
        display.textContent = a;
        newInput = true;
    }
});

divide.addEventListener("click", function () {
    operator = "divide";
    //clean slate
    if (!a && !b) 
    {
        a = Number(display.textContent);
        newInput = true;
    }
    
    //if plus is clicked after equal
    else if (!a && result)
    {
        a = result;
        result = null;
        newInput = true;
    }

    //if plus is clicked again after plus
    else if (a)
    {
        b = Number(display.textContent);
        a /= b;
        display.textContent = a;
        newInput = true;
    }
});


equal.addEventListener("click", function() {
    if (operator == "add")
    {
       if(a)
        {
            b = Number(display.textContent);
            result = a + b;
            a = null;
            display.textContent = result;
            newInput = true;
        }
        else if (!a && result)
        {
            result += b;
            display.textContent = result;
            newInput = true;
        }
    }

    if (operator == "subtract")
    {
       if(a)
        {
            b = Number(display.textContent);
            result = a - b;
            a = null;
            display.textContent = result;
            newInput = true;
        }
        else if (!a && result)
        {
            result -= b;
            display.textContent = result;
            newInput = true;
        }
    }

    if (operator == "mulitply")
    {
       if(a)
        {
            b = Number(display.textContent);
            result = a * b;
            a = null;
            display.textContent = result;
            newInput = true;
        }
        else if (!a && result)
        {
            result *= b;
            display.textContent = result;
            newInput = true;
        }
    }

    if (operator == "divide")
    {
       if(a)
        {
            b = Number(display.textContent);
            result = a / b;
            a = null;
            display.textContent = result;
            newInput = true;
        }
        else if (!a && result)
        {
            result /= b;
            display.textContent = result;
            newInput = true;
        }
    }

});