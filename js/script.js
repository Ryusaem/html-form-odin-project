const passwordInput = document.querySelector("#user-password");
const passwordInputConfirm = document.querySelector("#user-password-confirm");

const passwordPopup = document.querySelector("#password-popup");
const lengthCriteria = document.querySelector("#length");
const uppercaseCriteria = document.querySelector("#uppercase");
const numberCriteria = document.querySelector("#number");
const specialCriteria = document.querySelector("#special");

const showHide = document.querySelector(".show-hide");

// Show/Hide password
showHide.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showHide.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showHide.textContent = "Show";
  }
});

// criteria for password (regex)
const criteria = {
  length: /^.{8,}$/,
  uppercase: /[A-Z]/,
  number: /[0-9]/,
  special: /[!@#$%^&*]/,
};

// Check if the confirm password is exactly the same as the password
passwordInputConfirm.addEventListener("input", () => {
  if (passwordInputConfirm.value !== passwordInput.value) {
    passwordInputConfirm.setCustomValidity("Passwords do not match");
  } else {
    passwordInputConfirm.setCustomValidity("");
  }
});

// Check if the password is valid
passwordInput.addEventListener("input", () => {
  validatePassword(passwordInput.value);
});

// Show password criteria popup
const validatePassword = (password) => {
  validateCriterion(password, criteria.length, lengthCriteria);
  validateCriterion(password, criteria.uppercase, uppercaseCriteria);
  validateCriterion(password, criteria.number, numberCriteria);
  validateCriterion(password, criteria.special, specialCriteria);
};

// Validate password criteria
const validateCriterion = (password, regex, element) => {
  // let styles = getComputedStyle(element); // get the styles of the element -- DEBUG ONLY

  if (regex.test(password)) {
    element.classList.remove("invalid");
    element.classList.add("valid");
    element.style.setProperty("--content", '"\\2713"');
    element.style.setProperty("--content-color", "rgb(153, 255, 0)");
    // console.log(styles.getPropertyValue("--content"));
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
    element.style.setProperty("--content", '"\\2715"');
    element.style.setProperty("--content-color", "red");
    // console.log(styles.getPropertyValue("--content"));
  }
};
