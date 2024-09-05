// Initial DOM
const clearInput = document.getElementById("clear");
const deleteInput = document.getElementById("delete");
const increase = document.getElementById("increase");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const distribution = document.getElementById("distribution");
const amount = document.getElementById("amount");
const numberInput = document.querySelectorAll(".num");
const input = document.getElementById("input");
const output = document.getElementById("output");




// Function

// Add and Show input Number
let outputValue = output.value

numberInput.forEach(span => {
    span.addEventListener('click', ()=>{
        const toNumber = Number(span.innerText);

        input.innerText += toNumber;
    });
});

// Clear Input and Output
clearInput.addEventListener('click', ()=>{
    input.innerText = "";
    output.innerText = "";
});

deleteInput.addEventListener('click', ()=>{
    input.innerText = input.innerText.slice(0, -1);
})

let lastInput = ""; // Menyimpan input terakhir
const operators = ["+", "-", "*", "/"]; 

// Function add operation to input
function addOperation(operator) {

    const currentValue = input.innerText;
    

    if (operators.includes(lastInput) && operators.includes(operator)) {
        return;
    }
    
    input.innerText += `${operator}`;
    lastInput = operator; 
}

// Function eval
function calculate()
{
    const result = eval(input.innerText);
    output.innerText = "= " + result
}


// Initial Operator
increase.addEventListener('click', () => addOperation('+'));
subtraction.addEventListener('click', () => addOperation("-"));
multiplication.addEventListener('click', () => addOperation("*"));
distribution.addEventListener('click', () => addOperation("/"));
amount.addEventListener('click', () => calculate());



// Dark And Light Mode
const lightText = document.querySelectorAll('.light');
const body = document.body;
const buttonCalc = document.querySelectorAll(".btnCalt");
const boxCalct = document.querySelectorAll(".box");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

function darkmode()
{
    boxCalct.forEach(Element =>{
        Element.style.backgroundColor = "#19252F"
    })

    moon.style.display = "none";
    sun.style.display = "block";

    body.style.backgroundColor = "#080A10";

    lightText.forEach(element => {
        element.style.color = "white";
    });

    buttonCalc.forEach(span => {
        span.style.background = "linear-gradient(to right, #606060, #707070)";
        span.style.color = "white";
    });
}

function lightmode()
{
    boxCalct.forEach(Element =>{
        Element.style.backgroundColor = "rgba(203, 233, 255, 0.6)"
    })

    moon.style.display = "block";
    sun.style.display = "none";

    body.style.backgroundColor = "#FFFFFF";

    lightText.forEach(element => {
        element.style.color = "#2c2c2c";
    });

    buttonCalc.forEach(span => {
        span.style.background = "linear-gradient(to right, #FFFFFF, #E0E0E0)";
        span.style.color = "#000000";
    });
}
