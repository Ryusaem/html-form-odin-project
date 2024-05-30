const passwordInput = document.querySelector("#user-password");
const passwordInputConfirm = document.querySelector("#user-password-confirm");

passwordInputConfirm.addEventListener("input", () => {
  if (passwordInputConfirm.value !== passwordInput.value) {
    passwordInputConfirm.setCustomValidity("Passwords do not match");
  } else {
    passwordInputConfirm.setCustomValidity("");
  }
});
