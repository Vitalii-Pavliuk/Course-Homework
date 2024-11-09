
document.querySelector("#validation-input").addEventListener("blur", (event) => {
  const input = event.target;
  if (input.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else input.classList.add("invalid");
})