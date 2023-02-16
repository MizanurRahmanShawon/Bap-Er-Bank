// step-1: Clicked submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2 get email input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   console.log(email);
  // always remember .value text form input filed
  // console.log('submit button clicked');
  // step-3 get password
  const passwordField = document.getElementById("user-pass");
  const pass = passwordField.value;
  //   console.log(email, pass);
  if (email === "miza@bap.com" && pass === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("toke ami kuno take debona re PADA!!! tui password vule gechis");
  }
});
