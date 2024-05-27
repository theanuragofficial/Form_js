function validateForm() {
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("confirm").value;
  var passwordMessage = document.getElementById("passw");
  var confirmPasswordMessage = document.getElementById("con_passw");

  passwordMessage.innerText = "";
  confirmPasswordMessage.innerText = "";

  if (password == "") {
    passwordMessage.innerText = "Please fill the password";
    return false;
  } else if (password.length < 5) {
    passwordMessage.innerText =
      "Password length must be more than 5 characters";
    return false;
  } else if (password != confirmPassword) {
    confirmPasswordMessage.innerText = "Oops! Passwords did not match";
    return false;
  } else {
    alert("This is Successful");
  }
}
