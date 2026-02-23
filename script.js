
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
        if (a === undefined) log.value = currentInput;
        else if (!operation) log.value = currentInput + operation;
        else log.value = a + " " + operation + " " + currentInput;
    })
);

ops.map(button =>
    button.addEventListener("click", () => {

       /* if (button.textContent === ".") {
            //decimal log for later
        } else if (button.textContent === "=") {
            
            //log.value = operate(a, b, operation);
        }
        else { */
            
            if (a === undefined) {
                a = Number(currentInput);   
                currentInput = ""; 
            } else if (b === undefined && currentInput !== "") {
                b = Number(currentInput);
                currentInput = "";
            }
                operation = button.textContent; 
                currentInput = "";
                log.value = a + " " + operation;
            } 
        //}
            
        ));
