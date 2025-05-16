const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const userName = event.currentTarget.value.trim();
  output.textContent = userName === "" ? "Anonymous" : userName;
});
