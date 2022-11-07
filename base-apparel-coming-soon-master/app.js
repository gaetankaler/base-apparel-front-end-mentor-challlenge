const inputEmail = document.querySelector("input-email");
const submitButton = document.querySelector("submit");
const errorIcon = document.querySelector("error-icon");
const errorMessage = document.querySelector("error-message");

submitButton.addEventListener("click", testEmail);

function testEmail(event) {
  event.preventDefault();
  if (!emailIsValid(inputEmail)) {
    showError();
  } else {
    noError();
  }
}

function emailIsValid(textInputEmail) {
  const inputEmailText = textInputEmail.value;
  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

  if (inputEmailText.match(emailRegex)) {
    return true;
  } else return false;
}

function showError() {
  errorMessage.classList.add("visible");
  errorIcon.classList.add("visible");
  inputEmail.classList.add("error");
}

function noError() {
  errorMessage.classList.remove("visible");
  errorIcon.classList.remove("visible");
  inputEmail.classList.remove("error");
}
