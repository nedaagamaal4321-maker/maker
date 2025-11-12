let display = document.getElementById("display");
let currentInput = "";

function press(value) {
    if (value === "Clear") {
        currentInput = "";
        display.value = "";
    } 
    else if (value === "Back") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } 
    else if (value === "=") {
        try {
            let expression = currentInput.replace(/X/g, "*").replace(/÷/g, "/").replace(/_/g, "-");
            let result = eval(expression);
            display.value = result;
            currentInput = result.toString();
        } catch {
            display.value = "Error";
            currentInput = "";
        }
    } 
    else {
        if (value === "X") value = "*";
        if (value === "÷") value = "/";
        if (value === "_") value = "-";
        currentInput += value;
        display.value = currentInput;
    }
}
