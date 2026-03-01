const formData = {email: "", message: ""}
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey));


if (savedData) {
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
    
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  form.reset();
});

