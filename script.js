const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let currentValue = "";
let operator = "";
let firstValue = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (!isNaN(value)) {
            currentValue += value;
            display.value = currentValue;
        }
        else if (value === "C") {
            currentValue = "";
            firstValue = "";
            operator = "";
            display.value = "";
        }
        else if (value === "=") {
            if (firstValue && operator && currentValue) {
                let result = eval(firstValue + operator + currentValue);
                display.value = result;
                currentValue = result;
                firstValue = "";
                operator = "";
            }
        }
        else {
            if (currentValue) {
                firstValue = currentValue;
                operator = value;
                currentValue = "";
            }
        }
    });
});
