"use strict";

//STEP ELEMENTS
const stepsContainer = document.querySelector(".stepsContainer");
const step1 = document.getElementById("num-1");
const step2 = document.getElementById("num-2");
const step3 = document.getElementById("num-3");
const step4 = document.getElementById("num-4");
const allsteps = document.querySelectorAll(".stepNumber");

//
//PERSONAL INFO
const formContainer = document.querySelector(".formContainer");
const userName = document.getElementById("inputName");
const emailAddress = document.getElementById("inputEmail");
const phoneNumber = document.getElementById("inputNumber");
const firstBtn = document.getElementById("firstBtn");

//
//PAGES
const allPages = document.querySelectorAll(".formSection");
const firstPage = document.querySelector(".firstForm");
const secondPage = document.querySelector(".secondForm");
const thirdPage = document.querySelector(".thirdForm");
const fourthPage = document.querySelector(".fourthForm");
const completedPage = document.querySelector(".completedSection");

//CODE
stepsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".step");
  const clickedID = clicked.getAttribute("id");
  console.log(clicked, clickedID);

  if (clickedID) {
    allsteps.forEach((step) => {
      step.classList.add("inactiveNum");
      step.classList.remove("activeNum");
    });

    allPages.forEach((page) => {
      page.classList.add("hidden");
    });

    if (clickedID == `step-1`) {
      step1.classList.remove(`inactiveNum`);
      step1.classList.add(`activeNum`);
      firstPage.classList.remove("hidden");
    } else if (clickedID == `step-2`) {
      step2.classList.remove(`inactiveNum`);
      step2.classList.add(`activeNum`);
      secondPage.classList.remove("hidden");
    } else if (clickedID == `step-3`) {
      step3.classList.remove(`inactiveNum`);
      step3.classList.add(`activeNum`);
      thirdPage.classList.remove("hidden");
    } else if (clickedID == `step-4`) {
      step4.classList.remove(`inactiveNum`);
      step4.classList.add(`activeNum`);
      fourthPage.classList.remove("hidden");
    }
  }
});

//MONTHLY/YEARLY SWITCH ON STEP 2
const sliderBtn = document.querySelector(".sliderBtn");

sliderBtn.addEventListener("click", () => {
  sliderBtn.classList.toggle("sliderYearly");

  document.querySelectorAll(".priceMonth").forEach((item) => {
    item.classList.toggle("hidden");
  });

  document.querySelectorAll(".priceYear").forEach((item) => {
    item.classList.toggle("hidden");
  });
});

//PREVIOUS AND NEXT BUTTONS
const prevNextbtns = document.querySelectorAll(".btn");

prevNextbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //step change animation
    allsteps.forEach((step) => {
      step.classList.add("inactiveNum");
      step.classList.remove("activeNum");
    });

    //hide all pages first
    allPages.forEach((page) => {
      page.classList.add("hidden");
    });

    if (btn.getAttribute("id") == "firstBtn") {
      secondPage.classList.remove("hidden");
      step2.classList.add(`activeNum`);
      step2.classList.remove(`inactiveNum`);
    } else if (btn.getAttribute("id") == "nextBtn2") {
      thirdPage.classList.remove("hidden");
      step3.classList.add(`activeNum`);
      step3.classList.remove(`inactiveNum`);
    } else if (btn.getAttribute("id") == "nextBtn3") {
      fourthPage.classList.remove("hidden");
      step4.classList.add(`activeNum`);
      step4.classList.remove(`inactiveNum`);
    } else if (btn.getAttribute("id") == "nextBtn4") {
      completedPage.classList.remove("hidden");
    } else if (btn.getAttribute("id") == "backBtn1") {
      firstPage.classList.remove("hidden");
      step1.classList.add(`activeNum`);
      step1.classList.remove(`inactiveNum`);
    } else if (btn.getAttribute("id") == "backBtn2") {
      secondPage.classList.remove("hidden");
      step2.classList.add(`activeNum`);
      step2.classList.remove(`inactiveNum`);
    } else if (btn.getAttribute("id") == "backBtn3") {
      thirdPage.classList.remove("hidden");
      step3.classList.add(`activeNum`);
      step3.classList.remove(`inactiveNum`);
    }
  });
});
