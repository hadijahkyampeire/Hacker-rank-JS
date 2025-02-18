let currentBinValue = "";

function onOneClick() {
     currentBinValue+="1"; 
    renderComputation();
}

function onZeroClick() {
     currentBinValue+="0"; 
    renderComputation();
}

function renderComputation() {
    const resArea = document.getElementById("res");
    resArea.innerHTML = currentBinValue;
}

function onAddClick() {
    currentBinValue+="+";
    renderComputation();
}

function onSubClick() {
    currentBinValue+="-";
    renderComputation();
}

function onMultiplyClick() {
    currentBinValue+="*";
    renderComputation();
}

function onDivideClick() {
    currentBinValue+="/";
    renderComputation();
}

function onClearClick() {
    currentBinValue = currentBinValue.slice(0,-1);
    renderComputation();
}

function onEqualsClick(){
    const computationSplit = currentBinValue.split(/([+\-*/])/);
    const firstBinValue = computationSplit[0];
    const secBinValue = computationSplit[2];
    const operator = computationSplit[1];
    
    const num1 = parseInt(firstBinValue, 2);
    const num2 = parseInt(secBinValue, 2);
    
    let res = "";
    
    switch(operator){
        case "+":
            res = (num1 + num2).toString(2);
            break;
        case "-":
            res = (num1 - num2).toString(2);
            break;
        case "*":
            res = (num1 * num2).toString(2);
            break;
        case "/":
            res = num2 !== 0 ? (Math.floor(num1/num2)).toString(2) : "Error";
            break;
        default:
            res = "Invalid Operation";
    }
    
    document.getElementById("res").innerHTML = res;
}
