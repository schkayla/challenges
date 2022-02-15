// totaling the gift options

document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
let food = document.getElementById("food-select");
let transport = document.getElementById("transport-select");
let balloons = document.getElementById("balloon-checkbox");


function calculate() {
    if (!food.value || !transport.value) {
        alert('Please enter a value!');
        return;
    }
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    let total = parseInt(food.value) + parseInt(transport.value);
    // 2. Display the total cost in the cost-el span.
    if (balloons.checked) {
        costEl.innerText = `$${total} + balloons`;
    } else costEl.innerText = `$${total}`;
}
