document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var passwordInput = document.querySelector('input[type="password"]');
    var passwordValue = passwordInput.value;

    if (passwordValue.length >= 8) {
      alert("Login berhasil!");
      window.location.href = "undercons.html";
    } else {
      alert("Password harus minimal 8 karakter");
    }
  });
});
function showpass() {
  var x = document.getElementById("passwordinput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
