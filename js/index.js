// DOM Elements to be Manipulated

// Form Element
const form = document.forms["form"];
// Input Labels
const dayLabel = document.querySelector("#dayLabel");
const monthLabel = document.querySelector("#monthLabel");
const yearLabel = document.querySelector("#yearLabel");
// The outputs
const ageInDaysOutput = document.querySelector("#ageInDays");
const ageInMonthsOutput = document.querySelector("#ageInMonths");
const ageInYearsOutput = document.querySelector("#ageInYears");
// The Inputs
const dayInput = document.querySelector("#dayInput");
console.log(dayInput);
const monthInput = document.querySelector("#monthInput");
const yearInput = document.querySelector("#yearInput");
// The Error Messages
const dayErrorMessage = document.querySelector("#dayErrorMessage");
const monthErrorMessage = document.querySelector("#monthErrorMessage");
const yearErrorMessage = document.querySelector("#yearErrorMessage");
// Date Variables
const currentDate = new Date();
let ageInDays = 0;
let ageInMonths = 0;
let ageInYears = 0;
let dateOfBirth;
// Formatting the output if empty
ageInDaysOutput.innerHTML = ageInDays ? ageInDays : "--";
ageInMonthsOutput.innerHTML = ageInMonths ? ageInMonths : "--";
ageInYearsOutput.innerHTML = ageInYears ? ageInYears : "--";

// D R Y
const errorTextColor = "hsl(0, 100%, 67%)";
const errorBorder = "1px solid " + errorTextColor;
// Form Validation
let error;
const validateForm = () => {
  // Check for Empty and valid input

  // // Day
  if (isNaN(dayInput.value) || dayInput.value > 31) {
    dayErrorMessage.style.display = "block";
    dayErrorMessage.innerHTML = "Must be a valid day";
    dayInput.style.border = errorBorder;
    dayLabel.style.color = errorTextColor;
    error = true;
  } else if (!dayInput.value) {
    dayErrorMessage.style.display = "block";
    dayErrorMessage.innerHTML = "This field is required";
    dayInput.style.border = errorBorder;
    dayLabel.style.color = errorTextColor;
    error = true;
  } else {
    dayErrorMessage.style.display = "none";
    dayInput.style.border = "";
    dayLabel.style.color = "";
  }
  // // Month
  if (isNaN(monthInput.value) || monthInput.value > 12) {
    monthErrorMessage.style.display = "block";
    monthErrorMessage.innerHTML = "Must be a valid month";
    monthInput.style.border = errorBorder;
    monthLabel.style.color = errorTextColor;
    error = true;
  } else if (!monthInput.value) {
    monthErrorMessage.style.display = "block";
    monthErrorMessage.innerHTML = "This field is required";
    monthInput.style.border = errorBorder;
    monthLabel.style.color = errorTextColor;
    error = true;
  } else {
    monthErrorMessage.style.display = "none";
    monthInput.style.border = "";
    monthLabel.style.color = "";
  }
  // // Year
  if (
    isNaN(yearInput.value) ||
    parseInt(yearInput.value) > currentDate.getFullYear()
  ) {
    yearErrorMessage.style.display = "block";
    yearErrorMessage.innerHTML = "Must be in the past";
    yearInput.style.border = errorBorder;
    yearLabel.style.color = errorTextColor;
    error = true;
  } else if (!yearInput.value) {
    yearErrorMessage.style.display = "block";
    yearErrorMessage.innerHTML = "This field is required";
    yearInput.style.border = errorBorder;
    yearLabel.style.color = errorTextColor;
    error = true;
  } else {
    yearErrorMessage.style.display = "none";
    yearInput.style.border = "";
    yearLabel.style.color = "";
  }
  if (
    !(
      isNaN(dayInput.value) ||
      dayInput.value > 31 ||
      isNaN(monthInput.value) ||
      monthInput.value > 12 ||
      isNaN(yearInput.value) ||
      parseInt(yearInput.value) > currentDate.getFullYear()
    )
  ) {
    error = false;
    console.log("Form Validated Successfully!");
  } else {
    error = true;
  }
};
// Calculating the Age
const calculateAge = () => {
  validateForm();
  if (!error) {
    dateOfBirth = new Date(
      parseInt(yearInput.value),
      parseInt(monthInput.value) - 1,
      parseInt(dayInput.value)
    );

    let age = currentDate - dateOfBirth;
    console.log(age);
    ageInYears = Math.floor(age / 31_449_600_000);
    ageInMonths = Math.floor(age / 2_419_200_000) % 12;
    ageInDays = Math.floor(age / 86_400_000) % 30;
    console.log(
      `Age is ${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`
    );
    // Formatting the output if empty
    ageInDaysOutput.innerHTML = ageInDays || ageInDays< 0 ? ageInDays : "--";
    ageInMonthsOutput.innerHTML = ageInMonths || ageInMonths < 0 ? ageInMonths : "--";
    ageInYearsOutput.innerHTML = ageInYears || ageInYears < 0 ? ageInYears : "--";
  } else{
    validateForm()
  }
};

// Confirm if there are any errors
// Prevent Form From Refreshing the Page
form.addEventListener("submit", (e) => {
  e.preventDefault();

  calculateAge();
});
