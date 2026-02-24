
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


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
    
        else {
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
                console.log("a: " + a + " op: " + operation + " b: " + b)
                result = operate(a, b, operation);
                log.value = result;
                a = result;
                b = undefined;
                currentInput = "";
            }
                operation = button.textContent; 
                //currentInput = "";
                log.value = a + " " + operation;
            }
        ));

equals.addEventListener("click", () => {
    if (a === undefined || b === undefined || !operation) {
        log.style.fontSize = "45px";
        console.log("a: " + a + " op: " + operation + " b: " + b)
        log.value = "SYNTAX ERROR";
    } else {
        console.log("a: " + a + " op: " + operation + " b: " + b)
        result = operate(a, b, operation);
        log.value = result;
        a = result;
        b = undefined;
        currentInput = "";
        }
    }
)

