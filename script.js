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

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function muliply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num2 == 0){
        return "Cannot Divide By 0";
    }
    return num1 / num2;
}

function operate(op, num1, num2){
    if(op == "+"){
        return add(num1, num2);
    }
    else if(op == "-"){
        return subtract(num1, num2);
    }
    else if(op == "x"){
        return muliply(num1, num2);
    }
    else if(op == "/"){
        return divide(num1, num2);
    }
        
}

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
operationButtons.forEach(op =>{
    op.addEventListener("click", ()=>{
        let operatorChosen = op.textContent;
        numberStr = numberStr + " " + operatorChosen + " ";
        display.textContent = numberStr;
    });
});

let convertArr = [];
let opArr = [];
const equals = document.querySelector(".equals");
equals.addEventListener("click", function(){
    let split = numberStr.split(" ");
    let j = 0;
    let k = 0;
    for(let i = 0; i < split.length; i++){
        if(i % 2 == 0){
            convertArr[j] = Number(split[i]);
            split[i] = Number(split[i]);
            j++;
        }
        else{
            opArr[k] = split[i];
            k++; 
        }
    }
    console.log(split);
    console.log(convertArr);
    console.log(opArr);

    let num1 = convertArr[0];
    let num2 = 0;

    for(let i = 0; i <  convertArr.length - 1; i++){
        num2 = convertArr[i + 1];
        prevResult = operate(opArr[i], num1, num2)
        num1 = prevResult;
        
    }
    console.log(prevResult);

});
