document.querySelector(".login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    if (!email.value.trim() || !password.value) {
      alert("Fill in all fields of the form!");
      return;
    }
  
    const formData = {
      email: email.value,
      password: password.value,
    };
  
    console.log(formData);
    event.target.reset();
  });
  