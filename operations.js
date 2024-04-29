let num1, num2, operation, result = undefined;
num1 = "";
num2 = "";
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function () {
        buttons[i].style.backgroundColor = "#FED8B1";
    });
    buttons[i].addEventListener("mouseleave", function () {
        buttons[i].style.backgroundColor = "white";
    });
}

let numbers = document.getElementsByClassName("number");
let windowDiv = document.getElementById("inputWindow");
for(let num = 0; num < numbers.length; num++)
{
    numbers[num].addEventListener("click", function()
    {
        if(operation == null && num1 != null && num2 != null)
        {
            num1 += numbers[num].textContent;
            windowDiv.textContent = num1;
            console.log(num1);
        }
        else
        {
            if(num2 == null)
            {
                num2 = "";
            }
            num2 += numbers[num].textContent;
            windowDiv.textContent = num2;
            console.log(num2);
        }
    });
}

let equalSign = document.getElementById("equal");
equalSign.addEventListener("click", function()
{
    if(num1 != null && num2 != null && operation != null)
    {
        if(result == null)
        {
            result = operate(operation, num1, num2);
            windowDiv.textContent = result;
            num1 = result;
            result = null;
            operation = null;
            num2 = null;
        }
    }

});

let operations = document.getElementsByClassName("operator");
for(let op = 0; op < operations.length; op++)
{
    operations[op].addEventListener("click", function()
    {
        if(num1 != null && operation == null)
        {
            operation = operations[op].textContent;
            console.log(operation)
        }
    });
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiple(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(operation, num1, num2) {
    if (operation == "+") {
        return add(num1, num2);
    }
    else if (operation == "-") {
        return subtract(num1, num2);
    }
    else if (operation == "x") {
        return multiple(num1, num2);
    }
    else if (operation == "/") {
        return divide(num1, num2);
    }
}