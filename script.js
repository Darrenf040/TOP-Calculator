const numbersContainer = document.querySelector(".numbers-container");

const clearButton = document.createElement("button");
clearButton.textContent = "clr";
clearButton.className = "clear-button";

const negativeButton = document.createElement("button");
negativeButton.textContent = "(-)";
negativeButton.className = "negative-button";

const backspaceButton = document.createElement("button");
backspaceButton.textContent = "backspace"
backspaceButton.className = "backspace-button";

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
    else if(op == "*"){
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
let operatorChosen
operationButtons.forEach(op =>{
    op.addEventListener("click", ()=>{
        operatorChosen = op.textContent;
        let opPos = numberStr.charAt(numberStr.length - 2);
        if(opPos  == '+' || opPos == '-' || opPos == '*' || opPos == '/'){
            return;
        }
        numberStr = numberStr + " " + operatorChosen + " ";
        let displayText = numberStr;
        display.textContent = displayText;
        decSplit.pop();
        prevResultString = "";
    });
});

let prevResult;
let prevResultString = "";
let convertArr = [];
let opArr = [];
const equals = document.querySelector(".equals");
equals.addEventListener("click", function(){
    if(numberStr[numberStr.length - 2] == operatorChosen || numberStr[numberStr.length - 1] == '.'){
        return;
    }
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

    let num1 = convertArr[0];
    let num2 = 0;

    for(let i = 0; i <  convertArr.length - 1; i++){
        num2 = convertArr[i + 1];
        prevResult = operate(opArr[i], num1, num2)
        num1 = prevResult;
        
    }
    prevResult = Math.round(prevResult * 100) / 100;
    prevResultString = prevResult.toString();
    numberStr = prevResult;
    display.textContent = numberStr;
    convertArr = [];
    numberStr = numberStr.toString();
    decSplit.pop();
});

clearButton.addEventListener("click", ()=> {
    numberStr = "";
    convertArr = [];
    display.textContent = "";
    num1 = "";
    prevResult = "";
    decSplit.pop();
    
});

backspaceButton.addEventListener("click", ()=> {
        if(numberStr.charAt(numberStr.length - 1) == " "){
            numberStr = numberStr.substring(0, numberStr.length - 3);
            display.textContent = numberStr;    
        }
        else{
            numberStr = numberStr.substring(0, numberStr.length - 1);
            display.textContent = numberStr;    
        }
});

let decSplit = [];
decimal.addEventListener("click", ()=> {
    decimal.style.opacity = "100%";
    for(let i = 0; i < prevResultString.length; i++){
        if(prevResultString.charAt(i) == "."){
            return;
        }
    }
    if(numberStr.charAt(numberStr.length - 1) == '.'){
        return;
    }
    if(decSplit.length == 0){
        decSplit[0] = numberStr;
    }
    else if(decSplit.length >= 1){
        return;
    }
        
    numberStr += ".";
    display.textContent = numberStr;
});

negativeButton.addEventListener("click", ()=> {
    // let negSplit = numberStr.split(" ");
    // let convert;
    // let negNumber;
    // let negStr;
    // let replaceStr;
    // if(negSplit.length == 1){
    //     convert = Number(negSplit[0]);
    //     negNumber = convert * -1;
    //     display.textContent = negNumber;
    // }
    // else{
    //     convert = Number(negSplit[negSplit.length - 1]);
    //     if(!isNaN(convert) && convert > 0){
    //         negNumber  = convert * -1;
    //         console.log(negSplit);
    //         negStr = negNumber.toString();
    //         replaceStr = convert.toString();
    //         console.log(negStr);
    //         numberStr = numberStr.replace(replaceStr, negStr);
    //         console.log(numberStr);
    //     }
    // }
});

const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        button.style.opacity = "50%";

        setTimeout(()=> {
            button.style.opacity = "100%";
        }, 125);
    });
});