"use strict";

const formSection = document.querySelector(".form-section");

//STEP NUMBERS
const stepOneNum = document.getElementById("step-1");
const stepTwoNum = document.getElementById("step-2");
const stepThreeNum = document.getElementById("step-3");
const stepFourNum = document.getElementById("step-4");

//STEP 1 INPUT
const inputName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");

const errorLabel = document.querySelectorAll(".error-label");

//NEXT STEP BTNS
const btnNextOne = document.getElementById("next-one");
const btnNextTwo = document.getElementById("next-two");
const btnNextThree = document.getElementById("next-three");
const btnNextFour = document.getElementById("next-four");

//PREV STEP BTNS
const btnPrevTwo = document.getElementById("prev-two");
const btnPrevThree = document.getElementById("prev-three");
const btnPrevFour = document.getElementById("prev-four");

//STEP TEMPLATES
const stepTwo = `<h1 class="form-heading">Select your plan</h1>
<p class="form-sub-heading">
  You have the option of monthly or yearly billing.
</p>
<div class="payment-card-grp">
  <div class="card">
    <img src="assets/images/icon-arcade.svg" class="card-img" />
    <h1 class="card-heading">Arcade</h1>
    <p class="card-price">$9/mo</p>
  </div>
  <div class="card">
    <img src="assets/images/icon-advanced.svg" class="card-img" />
    <h1 class="card-heading">Advanced</h1>
    <p class="card-price">$12/mo</p>
  </div>
  <div class="card">
    <img src="assets/images/icon-pro.svg" class="card-img" />
    <h1 class="card-heading">Pro</h1>
    <p class="card-price">$15/mo</p>
  </div>
</div>
<div class="month-year-grp">
  <p class="month-text">Month</p>
  <div class="slider">
    <span class="choice"></span>
  </div>
  <p class="year-text">Year</p>
</div>
<div class="btn-grp">
  <button class="form-btn-prev" id="prev-two">Go Back</button>
    <button class="form-btn-next" id="next-two">Next Step</button>
</div>`;

console.log(formSection);

//CODE
const inputValidation = function (inputField, inputNumber) {
  if (inputField.value == "") {
    errorLabel[inputNumber].classList.remove("hidden");
  } else {
    errorLabel[inputNumber].classList.add("hidden");
  }
};

//NEXT BTN FOR STEP 1
btnNextOne.addEventListener("click", function (e) {
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

  //NEXT PAGE
  if (
    email.value.includes("@") &&
    email.value.includes(".com") &&
    inputName.value !== "" &&
    phoneNumber.value !== ""
  ) {
    console.log("next page");
    formSection.innerHTML = stepTwo;
    stepOneNum.classList.remove("active-step");
    stepTwoNum.classList.add("active-step");
  }
});

//NEXT BTN FOR STEP 2
