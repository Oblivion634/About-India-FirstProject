const loginsec = document.querySelector('.login-section')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
registerlink.addEventListener('click', () => {
    loginsec.classList.add('active')
})
loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active')
})


const emailInput = document.getElementById('email');

function validateEmail() {
    const email = emailInput.value;
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailFormat.test(email)) {

        document.getElementById('error-message').textContent = "Please enter a valid email address.";
    } else {

        document.getElementById('error-message').textContent = "";
    }
}


emailInput.addEventListener("input", validateEmail);


function login() { alert("Login successful") }

const emailInput1 = document.getElementById('email1');

function validateEmail1() {
    const email1 = emailInput1.value;
    const emailFormat1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailFormat1.test(email1)) {

        document.getElementById('error-message1').textContent = "Please enter a valid email address.";
    } else {

        document.getElementById('error-message1').textContent = "";
    }
}

emailInput1.addEventListener("input", validateEmail1);

function signup() {
    var agreeChecked = document.getElementById("agree").checked;

    if (agreeChecked) {
        alert("Account created successfully!");
    } else {
        var errorMessageElement = document.getElementById("error_message");
        errorMessageElement.textContent = "You must agree to the terms and conditions.";
    }
}
