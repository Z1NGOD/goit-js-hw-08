import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");

let formData = {
    email: "",
    message: "",
};
formEl.addEventListener("input", throttle((event) => { 
    if (event.target.name === "email") {
        formData.email = event.target.value;
    }
    if (event.target.name === "message") {
        formData.message = event.target.value;
    }   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedFormData) {
    formEl.email.value = savedFormData.email;
    formEl.message.value = savedFormData.message;
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email) {
        alert("Geben Sie schnell Ihre E-Mail-Adresse ein")

        return;
    }
    else if (!formData.message) {
        alert("Geben Sie schnell Ihre Nachricht ein")
        return;
    }
    event.currentTarget.reset();
    console.log(formData);
    localStorage.clear();
});



