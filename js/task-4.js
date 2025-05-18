const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (email === "" || password === "") {
    return alert(`All form fields must be filled in`);
  }
  event.target.reset();
  console.log(`Email: ${email}, Password: ${password}`);
}
