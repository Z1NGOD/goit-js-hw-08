import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

const formEl = document.querySelector(".feedback-form");



formEl.addEventListener("input", throttle((event) => { 
    if (event.target.name === "email") {
        formData.email = event.target.value;
    }
    if (event.target.name === "message") {
        formData.message = event.target.value;
    }   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

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
    alert("Danke färbt Ihr Feedback!");
    event.currentTarget.reset();
    console.log(formData);
    localStorage.clear();
});



