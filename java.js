document.addEventListener('DOMContentLoaded', () => {
//declares variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayScreen = "";

//gets the html elements
let display = document.getElementById("displayScreen")

let clear = document.getElementById("clearButton")

let button1 = document.getElementById("oneButton")
let button2 = document.getElementById("twoButton")
let button3 = document.getElementById("threeButton")
let button4 = document.getElementById("fourButton")
let button5 = document.getElementById("fiveButton")
let button6 = document.getElementById("sixButton")
let button7 = document.getElementById("sevenButton")
let button8 = document.getElementById("eightButton")
let button9 = document.getElementById("nineButton")

let timesButton = document.getElementById("timesButton")
let minusButton = document.getElementById("minusButton")
let plusButton = document.getElementById("plusButton")

let zeroButton = document.getElementById("zeroButton")
let decimalButton = document.getElementById("decimalButton")
let divideButton = document.getElementById("divideButton")

let equalButton = document.getElementById("equalButton")

//button events

display.textContent = displayScreen;

button1.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "1";
        displayScreen += "1";
    }
    else {
        secondNumber += "1";
        displayScreen += "1";
    }
    display.textContent = displayScreen;
})

button2.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "2";
        displayScreen += "2";
    }
    else {
        secondNumber += "2";
        displayScreen += "2";
    }
    display.textContent = displayScreen;
})

button3.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "3";
        displayScreen += "3";
    }
    else {
        secondNumber += "3";
        displayScreen += "3";
    }
    display.textContent = displayScreen;
})

button4.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "4";
        displayScreen += "4";
    }
    else {
        secondNumber += "4";
        displayScreen += "4";
    }
    display.textContent = displayScreen;
})

button5.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "5";
        displayScreen += "5";
    }
    else {
        secondNumber += "5";
        displayScreen += "5";
    }
    display.textContent = displayScreen;
})

button6.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "6";
        displayScreen += "6";
    }
    else {
        secondNumber += "6";
        displayScreen += "6";
    }
    display.textContent = displayScreen;
})

button7.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "7";
        displayScreen += "7";
    }
    else {
        secondNumber += "7";
        displayScreen += "7";
    }
    display.textContent = displayScreen;
})

button8.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "8";
        displayScreen += "8";
    }
    else {
        secondNumber += "8";
        displayScreen += "8";
    }
    display.textContent = displayScreen;
})

button9.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "9";
        displayScreen += "9";
    }
    else {
        secondNumber += "9";
        displayScreen += "9";
    }
    display.textContent = displayScreen;
})

zeroButton.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += "0";
        displayScreen += "0";
    }
    else {
        secondNumber += "0";
        displayScreen += "0";
    }
    display.textContent = displayScreen;
})

decimalButton.addEventListener('click', () => {
    if (operator == ""){
        firstNumber += ".";
        displayScreen += ".";
    }
    else {
        secondNumber += ".";
        displayScreen += ".";
    }
    display.textContent = displayScreen;
})

timesButton.addEventListener('click', () => {
    if (firstNumber != "" && (!displayScreen.includes("x")) && (!displayScreen.includes("-")) && (!displayScreen.includes("+")) && (!displayScreen.includes("/"))){
        operator = "x";
        displayScreen += "x";
    }
    display.textContent = displayScreen;
})

minusButton.addEventListener('click', () => {
    if (firstNumber != "" && (!displayScreen.includes("x")) && (!displayScreen.includes("-")) && (!displayScreen.includes("+")) && (!displayScreen.includes("/"))){
        operator = "-";
        displayScreen += "-";
    }
    display.textContent = displayScreen;
})

plusButton.addEventListener('click', () => {
    if (firstNumber != "" && (!displayScreen.includes("x")) && (!displayScreen.includes("-")) && (!displayScreen.includes("+")) && (!displayScreen.includes("/"))){
        operator = "+";
        displayScreen += "+";
    }
    display.textContent = displayScreen;
})

divideButton.addEventListener('click', () => {
    if (firstNumber != "" && (!displayScreen.includes("x")) && (!displayScreen.includes("-")) && (!displayScreen.includes("+")) && (!displayScreen.includes("/"))){
        operator = "/";
        displayScreen += "/";
    }
    display.textContent = displayScreen;
})

clear.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    displayScreen = "";
    operator = "";
    display.textContent = displayScreen;
})










//


});