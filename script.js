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
zero.className = "zero";
numbersContainer.appendChild(zero);

const decimal = document.createElement("button");
decimal.textContent = ".";
numbersContainer.appendChild(decimal);

