document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var usernameInput = document.querySelector('input[placeholder="Username"]');
    var usernameValue = usernameInput.value.trim();
    if (usernameValue === "") {
      alert("Username tidak boleh kosong");
      return;
    }

    var emailInput = document.querySelector('input[placeholder="Email"]');
    var emailValue = emailInput.value.trim();
    if (!isValidEmail(emailValue)) {
      alert("Email tidak valid");
      return;
    }

    var passwordInput = document.querySelector('input[placeholder="Password"]');
    var passwordValue = passwordInput.value;
    if (passwordValue.length < 8) {
      alert("Password harus minimal 8 karakter");
      return;
    }

    var confirmPasswordInput = document.querySelector(
      'input[placeholder="Confrim Password"]'
    );
    var confirmPasswordValue = confirmPasswordInput.value;
    if (passwordValue !== confirmPasswordValue) {
      alert("Konfirmasi password tidak sesuai");
      return;
    }

    alert("Register berhasil!, silahkan untuk login ulang");
    window.location.href = "login.html";
  });

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
function showpass() {
  var passwordInput = document.getElementById("passwordinput");
  var confirmPasswordInput = document.getElementById("confirmPasswordInput");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    confirmPasswordInput.type = "text";
  } else {
    passwordInput.type = "password";
    confirmPasswordInput.type = "password";
  }
}
