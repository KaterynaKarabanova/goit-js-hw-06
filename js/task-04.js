
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueNum = document.querySelector("#value")
let counterValue = 0; 
const onDecrement = () => {
    counterValue -= 1
    valueNum.textContent = counterValue;
};
const onIncrement = () => {
    counterValue += 1;
    valueNum.textContent = counterValue;
}; 
decrementBtn.addEventListener("click", onDecrement)

incrementBtn.addEventListener("click", onIncrement)
