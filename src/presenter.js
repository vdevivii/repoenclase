import sumar from "./sumador";
import mult from "./mult"; 

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form"); 
const div = document.querySelector("#resultado-div");

const firstm = document.querySelector("#primer-numero-mult");
const secondm = document.querySelector("#segundo-numero-mult");
const form2 = document.querySelector("#multiplicador-form");
const div2 = document.querySelector("#resultadomult-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstm.value);
  const secondNumber = Number.parseInt(secondm.value);

  div2.innerHTML = "<p>" + mult(firstNumber, secondNumber) + "</p>";
});
