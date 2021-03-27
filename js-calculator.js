var digits = 14;

function digitClicked(digit) {
    if (document.getElementById("displayNum").style.backgroundColor == "lightyellow") {
        document.getElementById("displayNum").style.backgroundColor = "#F6F6F6";
        document.getElementById("displayNum").style.color = "black";
        document.getElementById("displayNum").value = "0";
    }

    let displayValue = document.getElementById("displayNum").value
    if (displayValue != "0") {
        document.getElementById("displayNum").value += digit;
    } else {
        document.getElementById("displayNum").value = digit;
    }
    return
}

function initialize() {
    document.getElementById("displayNum").value = "0";
    document.getElementById("memory").value = "";
    document.getElementById("displayOperator").value = "";
    document.getElementById("displayNum").style.backgroundColor = "#F6F6F6";
    document.getElementById("displayNum").style.color = "black";
    return
}

function operatorClicked(oper) {
    document.getElementById("displayNum").style.backgroundColor = "#F6F6F6";
    document.getElementById("displayNum").style.color = "black";
    let saveOper = oper;
    if (document.getElementById("displayOperator").value == "") {
        document.getElementById("memory").value = document.getElementById("displayNum").value;
        document.getElementById("displayNum").value = 0;
        document.getElementById("displayOperator").value = oper;
    } else {
        let oper = document.getElementById("displayOperator").value;
        let memory = Number(document.getElementById("memory").value);
        let display = Number(document.getElementById("displayNum").value);
        switch (oper) {
            case "/":
                document.getElementById("memory").value = memory / display;
                break;
            case "X":
                document.getElementById("memory").value = memory * display;
                break;
            case "-":
                document.getElementById("memory").value = memory - display;
                break;
            case "+":
                document.getElementById("memory").value = memory + display;
                break;
        }
        document.getElementById("displayOperator").value = saveOper;
        document.getElementById("displayNum").value = "0";
    }
    return
}

function clearAllCalculator() {
    initialize();
    return
}

function clearCalculator() {
    document.getElementById("displayNum").value = "0";
    document.getElementById("displayNum").style.backgroundColor = "#F6F6F6";
    document.getElementById("displayNum").style.color = "black";
}

function backspace() {
    let display = (document.getElementById("displayNum").value)
    display = display.substr(0, display.length - 1);
    if (display.length > 0) {
        document.getElementById("displayNum").value = display;
    } else {
        document.getElementById("displayNum").value = "0";
    }
}

function performEqual() {
    let oper = document.getElementById("displayOperator").value;
    let memory = Number(document.getElementById("memory").value);
    let display = Number(document.getElementById("displayNum").value);
    let answer;
    switch (oper) {
        case "/":
            answer = (memory / display).toPrecision(digits);
            break;
        case "X":
            answer = (memory * display).toPrecision(digits);
            break;
        case "-":
            answer = (memory - display).toPrecision(digits);
            break;
        case "+":
            answer = (memory + display).toPrecision(digits);
            break;
    }

    while (answer.endsWith("0")) {
        answer = answer.substr(0, answer.length - 1);
    }

    if (answer.endsWith(".")) {
        answer = answer.substr(0, answer.length - 1);
    }

    document.getElementById("displayNum").value = answer;

    document.getElementById("memory").value = "";
    document.getElementById("displayOperator").value = "";
    document.getElementById("displayNum").style.backgroundColor = "lightyellow";
    document.getElementById("displayNum").style.color = "#ff6600";
    return
}

function decimalClicked() {

    if (document.getElementById("displayNum").style.backgroundColor == "lightyellow") {
        document.getElementById("displayNum").style.backgroundColor = "#F6F6F6";
        document.getElementById("displayNum").value = "0";
    }

    document.getElementById("displayNum").style.color = "black";
    let dNum = document.getElementById("displayNum").value
    if (dNum == "0") {
        document.getElementById("displayNum").value = "0.";
    } else if (dNum.includes(".") == false) {
        document.getElementById("displayNum").value += "."
    }
    return
}