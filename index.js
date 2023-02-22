"use strict";

const inputName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");

const errorLabel = document.querySelectorAll(".error-label");

const btnNext = document.querySelector(".form-btn");

// const nameError = document.querySelector(".name-error");
// const emailError = document.querySelector(".email-error");
// const phoneError = document.querySelector(".phone-error");

console.log(errorLabel);

//CODE
const inputValidation = function (inputField, inputNumber) {
  if (inputField.value == "") {
    errorLabel[inputNumber].classList.remove("hidden");
  } else {
    errorLabel[inputNumber].classList.add("hidden");
  }
};

btnNext.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("clicked");

  //INPUT NAME VALIDATION
  inputValidation(inputName, 0);
  inputValidation(phoneNumber, 2);

  if (email.value.includes("@") && email.value.includes(".com")) {
    console.log("Proceed");
    errorLabel[1].classList.add("hidden");
  } else {
    errorLabel[1].classList.remove("hidden");
  }
});
