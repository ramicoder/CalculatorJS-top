
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

const container = document.querySelector(".container");
const log = document.getElementById("log");
const nums = Array.from(document.querySelectorAll(".number"));
const ops = Array.from(document.querySelectorAll(".operation"));
const opts = Array.from(document.querySelectorAll(".option"));
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");
const clickSound = "click.mp3";
let result;

let currentInput = "";
nums.map(button => 
    button.addEventListener("click", () => {
        currentInput += button.textContent; 
        const audio = new Audio(clickSound);
        audio.play()
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
            const audio = new Audio(clickSound);
            audio.play()
            if (a === undefined) {
                a = Number(currentInput);   
            } else if (b === undefined) {
                b = Number(currentInput);
            }
            if (a && b) {
                result = operate(a, b, operation);
                log.value = result;
                a = result;
                b = undefined;
            }
                operation = button.textContent; 
                currentInput = "";
                log.value = a + " " + operation;
                result = undefined;
                decimal.disabled = false;
            }
        ));

equals.addEventListener("click", () => {
    const audio = new Audio(clickSound);
    audio.play()
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
        const audio = new Audio(clickSound);
        audio.play()
        if (button.textContent === "AC") {
            a = undefined;
            b = undefined;
            currentInput = "";
            log.value = "";
            operation = undefined;
        } 
        if (button.textContent === "⌫") {

            if (result != undefined) {
                
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
                log.value = a + " " + operation;
            } else {
                b = currentInput ? Number(currentInput) : undefined;
                log.value = a + " " + operation + (currentInput ? " " + currentInput : "");
            }
        }
    })
);

let deciClicked = false;
decimal.addEventListener("click", () => {
    const audio = new Audio(clickSound);
    audio.play()
    if (deciClicked === false) deciClicked = true;
    if (deciClicked === true) {
        currentInput += "."
        decimal.disabled = true;
    }
})
  
const p = document.createElement("p");
p.textContent = "Created by Rami Daood";
container.after(p);
