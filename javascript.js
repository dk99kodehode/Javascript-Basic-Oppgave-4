/*--------KALKULATOR------*/
const display = document.getElementById("display");
const paragraph = document.createElement("p");
const heading = document.createElement("h2");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}

heading.style.fontsize = "42px";
heading.textContent = "Hey im Dom, how are you?";

document.body.append(heading);

paragraph.style.fontsize = "42px";
paragraph.textContent = "Skadoosh youve been added";

document.body.append(paragraph);
