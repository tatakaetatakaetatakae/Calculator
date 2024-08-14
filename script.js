const display = document.getElementById("display");
let ok = false;
function pushToDisplay(key){
    if(ok === true)clearDisplay()
    ok = false;
    display.value += key;
    
}


function calculate(){
    const formula = display.value;
        display.value = eval(formula);
    ok = true;
    
}

function clearDisplay(){
    display.value = "";
}