const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const nameMsg = document.querySelector(".name-msg");
const email = document.querySelector("#email");
const emailMsg = document.querySelector(".email-msg");
const subject = document.querySelector("#subject");
const subjectMsg = document.querySelector(".subject-msg");
const address = document.querySelector("#address");
const addressMsg = document.querySelector(".address-msg");
const button = document.querySelector("button");
const successMsg = document.querySelector(".success");

function formValidator() {
  event.preventDefault();

  if (checkAmount(fullName.value, 1)) {
    nameMsg.style.display = "none";
  } else {
    nameMsg.style.display = "inline-block";
  }
  if (checkAmount(subject.value, 9)) {
    subjectMsg.style.display = "none";
  } else {
    subjectMsg.style.display = "inline-block";
  }
  if (checkAmount(address.value, 24)) {
    addressMsg.style.display = "none";
  } else {
    addressMsg.style.display = "inline-block";
  }
  if (validateEmail(email.value)) {
    emailMsg.style.display = "none";
  } else {
    emailMsg.style.display = "inline-block";
  }
  if (
    checkAmount(fullName.value, 1) &&
    checkAmount(subject.value, 9) &&
    checkAmount(address.value, 24) &&
    validateEmail(email.value)
  ) {
    successMsg.style.display = "block";
  }
}

form.addEventListener("submit", formValidator);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function checkAmount(value, amount) {
  if (value.trim().length > amount) {
    return true;
  } else {
    return false;
  }
}
