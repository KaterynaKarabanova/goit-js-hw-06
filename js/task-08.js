
const formEl = document.querySelector(".login-form");
const inputOfForm = Array.from(document.querySelectorAll("input"));
console.log(inputOfForm);

function onSubmit(event) {
  event.preventDefault();
  if (inputOfForm.some(input => input.value.length === 0)) {
    window.alert("Всі поля мають бути заповнені!");
  } else {
    const { email, password } = event.currentTarget.elements;
    const data = {
      email: email.value,
      password: password.value
    };
      console.log(data);
      formEl.reset()
  }
    
}

formEl.addEventListener("submit", onSubmit);

