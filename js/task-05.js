
document.querySelector("#name-input").addEventListener("input",  (event) => {
    const value = event.target.value;
    if (value) {
        document.querySelector("#name-output").textContent = value;
      } else document.querySelector("#name-output").textContent = "Anonymous";
  })
  
