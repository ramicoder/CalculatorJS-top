
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Undefined" : a / b;


let b;
let a;
let operation;

function operate(a, b, op) {
    if (op == "+") return add(a, b);
    if (op == "-") return subtract(a, b);
    if (op == "x") return multiply(a, b);
    if (op == "/") return divide(a, b);
}

const log = document.getElementById("log");

const nums = Array.from(document.querySelectorAll(".number"));

const ops = Array.from(document.querySelectorAll(".operation"));

const opts = Array.from(document.querySelectorAll(".option"));

const decimal = document.querySelector(".decimal");

const equals = document.querySelector(".equals");

let result;

let currentInput = "";
nums.map(button => 
    button.addEventListener("click", () => {
        currentInput += button.textContent; 
        if (a === undefined) log.value = Number(currentInput);
    
        else if (result) {
            result = undefined;
            a = undefined;
            b = undefined; 
            operation = undefined;
            log.value = Number(currentInput);
        } else {
            log.value = a + " " + operation + " " + Number(currentInput);
            b = Number(currentInput);
        }
    })
);

ops.map(button =>
    button.addEventListener("click", () => {
            
            if (a === undefined) {
                a = Number(currentInput);   
                currentInput = ""; 
            } else if (b === undefined) {
                b = Number(currentInput);
                currentInput = "";
            }
            if (a && b) {
                result = operate(a, b, operation);
                log.value = result;
                a = result;
                b = undefined;
                currentInput = "";
            }
                operation = button.textContent; 
                currentInput = "";
                log.value = a + " " + operation;
                result = undefined;
            }
        ));

equals.addEventListener("click", () => {
    if (a === undefined || b === undefined || !operation) {
        log.value = "";
    } else {
        result = operate(a, b, operation);
        log.value = result;
        a = result;
        b = undefined;
        currentInput = "";
        }
    }
);

opts.map(button => 
    button.addEventListener("click", () => {
        if (button.textContent === "AC") {
            a = undefined;
            b = undefined;
            currentInput = "";
            log.value = "";
            operation = undefined;
        } 
        if (button.textContent === "⌫") {

            if (result !== undefined) {
                
                a = undefined;
                b = undefined;
                operation = undefined;
                currentInput = "";
                result = undefined;
                log.value = "";
                return;
            }
            if (currentInput.length > 0) {
                currentInput = currentInput.slice(0, -1);
            }
            if (a === undefined) {
                log.value = currentInput;
            } else if (operation && currentInput === "") {
                operation = undefined;
                log.value = a;
            } else {
                b = currentInput ? Number(currentInput) : undefined;
                log.value = a + " " + operation + (currentInput ? " " + currentInput : "");
            }
        }
    })

)
  
