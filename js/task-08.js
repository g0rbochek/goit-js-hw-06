const elements = {
  form: document.querySelector(".login-form"),
};

elements.form.addEventListener("submit", hendlerSubmit);

function hendlerSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const infAboutUser = {
    email: email.value,
    password: password.value,
  };
  console.log(infAboutUser);
  elements.form.reset();
}
