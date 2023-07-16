const numbersContainer = document.querySelector(".numbers-container");

const clearButton = document.createElement("button");
const negativeButton = document.createElement("button");
const backspaceButton = document.createElement("button");

numbersContainer.appendChild(clearButton);
numbersContainer.appendChild(negativeButton);
numbersContainer.appendChild(backspaceButton);

for(let i = 1; i < 10; i++){
    const numbers = document.createElement("button");
    numbers.textContent = i;
    numbers.className = "number-button";
    numbersContainer.appendChild(numbers);
}
const zero = document.createElement("button");
zero.textContent = 0;
zero.classList.add("zero", "number-button");
numbersContainer.appendChild(zero);

const decimal = document.createElement("button");
decimal.textContent = ".";
numbersContainer.appendChild(decimal);

function add(...nums){
    let sum = 0;
    nums.forEach(num => {
        sum = sum + num;
    });
    return sum;
}
function subtract(...nums){
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        sum = sum - nums[i];
    }
    return sum;
}
function multiply(...nums){
    let sum = 1;
    nums.forEach(num => {
        sum = sum * num;
    });
    return sum;
}
function divide(...nums){
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        sum = sum / nums[i];
    }
    return sum;
}
// console.log(add(1, 2, 3, 4, 5));
// console.log(subtract(10, 5, 1, 1, 1));
// console.log(multiply(2, 2, 2));
// console.log(divide(20, 2, 2, 2, 2));

function operate(op, num1, num2){
    if(op == "+"){
        return add(num1, num2);
    }
    else if(op == "-"){
        return subtract(num1, num2);
    }
    else if(op == "*" || op == "x"){
        return multiply(num1, num2);
    }
    else if(op == "/"){
        return divide(num1, num2);
    }
}

// console.log(operate("+", 1, 2));
// console.log(operate("-", 1, 2));
// console.log(operate("/", 1, 2));
// console.log(operate("x", 1, 2));

let numberStr = "";
function numberDisplay(num){
    numberStr += num;
    return numberStr;
}

const numberButtons = document.querySelectorAll(".number-button");
const display = document.querySelector(".text-display")

numberButtons.forEach(num => {
    num.addEventListener("click", function(){
        display.textContent = numberDisplay(num.textContent);
    });
});