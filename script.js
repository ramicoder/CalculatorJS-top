
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


let b;
let a;
let operation;

function operate(a, b, op) {
    return op(a, b);
}

const log = document.getElementById("log");

const nums = Array.from(document.querySelectorAll(".number"));

const ops = Array.from(document.querySelectorAll(".operation"));

const opts = Array.from(document.querySelectorAll(".option"));


let currentInput = "";
nums.map(button => 
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        log.value = currentInput;
    })
);

ops.map(button =>
    button.addEventListener("click", () => {

        if (button.textContent === ".") {

        } else {
            
            if (!a) a = Number(currentInput); // store first number
            operation = button.textContent;    // store operator
            currentInput = "";                 // reset for second number
            log.value = a + " " + operation;   // show first number + operator
        }}));
