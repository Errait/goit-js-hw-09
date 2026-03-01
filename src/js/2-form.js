let formData = {email: "", message: ""}
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey));


if (savedData) {
    formData = { ...savedData };
    
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (formData.email.trim() === "" || formData.message.trim() === "") {
      return alert("Fill please all fields");
  }

  console.log(formData);

  form.reset();
  formData = { email: "", message: "" };
  localStorage.removeItem(localStorageKey);
});
