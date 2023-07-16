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
let diff = 0;
// function subtract(...nums){ //12 , 10
//     let sum = 0;
//         for(let i = 0; i < nums.length; i++){
//             sum = result - nums[i];
//         }
//         if(nums.length > 1){
//             sum = nums[0] - nums[1];
//         }
//     return sum;
// }
function multiply(...nums){
    let sum = 1;
    nums.forEach(num => {
        sum = sum * num;
    });
    return sum;
}
let prevNum;
function divide(...nums){

}
// console.log(add(1, 2, 3, 4, 5));
// console.log(subtract(10, 5, 1, 1, 1));
// console.log(multiply(2, 2, 2));
// console.log(divide(20, 2, 2, 2, 2));

function operate(op, ...nums){
    if(op == "+"){
        return add(...nums);
    }
    else if(op == "-"){
        return subtract(...nums);
    }
    else if(op == "*" || op == "x"){
        return multiply(...nums);
    }
    else if(op == "/"){
        return divide(prevNum);
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

const operationButtons = document.querySelectorAll(".op");
let result = 0;

let currentOp;
operationButtons.forEach(op => {
    op.addEventListener("click", function(e){
        display.textContent = numberStr;
        if(numberStr.length == 0){
            display.textContent = equalsResult;
        }
        let convert = Number(numberStr);
        currentOp = op.textContent;
        result = result + operate(currentOp, convert);
        console.log(result);
        numberStr = "";
    });
});

let equalsResult;
const equals = document.querySelector(".equals");
equals.addEventListener("click", ()=> {
    let convert = Number(numberStr);
    result = operate(currentOp, result, convert);
    equalsResult = result;
    display.textContent = equalsResult;
    numberStr = "";
});