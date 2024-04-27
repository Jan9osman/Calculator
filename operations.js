let num1, num2, operation;
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function () {
        buttons[i].style.backgroundColor = "hotpink";
    });
    buttons[i].addEventListener("mouseleave", function () {
        buttons[i].style.backgroundColor = "white";
    });
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiple(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operation, num1, num2) {
    if (operation == "+") {
        return add(num1, num2);
    }
    else if (operation == "-") {
        return subtract(num1, num2);
    }
    else if (operation == "*") {
        return multiple(num1, num2);
    }
    else if (operation == "/") {
        return divide(num1, num2);
    }
}