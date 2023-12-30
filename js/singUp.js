
var signUpInputName = document.querySelector("#signUpInputName");
var signUpInputEmail = document.querySelector("#signUpInputEmail");
var signUpInputPassword = document.querySelector("#signUpInputPassword");
var signUpBTN = document.querySelector("#signUpBTN");
var emailRepeatedWarning = document.querySelector("#emailRepeatedWarning");
var usersList;
var localStorageName = "users";
var logInList;


(function () {
    if (localStorage.getItem(localStorageName) == null) {
        usersList = [];
        logInList = [];
        console.log("h");
    } else {
        usersList = JSON.parse(localStorage.getItem(localStorageName));
        console.log("s");
    }

})();


signUpBTN.addEventListener("click", function () {
    if (!isEmailRepeated() & validation()) {
        user = {
            name: signUpInputName.value,
            email: signUpInputEmail.value,
            password: signUpInputPassword.value
        }


        usersList.push(user);
        console.log(usersList);
        setLocalStorage(usersList);


        clearForm("signUp");
        emailRepeatedWarning.innerHTML = "Success";
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-danger", "text-success");

        window.location.href = "index.html";
    }

});



function isEmailRepeated() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email.toLowerCase().includes(signUpInputEmail.value)) {
            console.log("Repeated");
            emailRepeatedWarning.innerHTML = "email already exists";
            emailRepeatedWarning.classList.replace("d-none", "d-block");
            emailRepeatedWarning.classList.replace("text-success", "text-danger");

            return true;

        }



    }
    emailRepeatedWarning.classList.replace("d-block", "d-none");
}

function setLocalStorage(list) {
    localStorage.setItem(localStorageName, JSON.stringify(list));
}

function clearForm(flag) {

    flag === "signUp" ? signUpInputName.value = "" : logInInputEmail.value = "";
    flag === "signUp" ? signUpInputEmail.value = "" : logInInputPassword.value = "";
    flag === "signUp" ? signUpInputPassword.value = "" : console.log("s");
}

function validation() {
    if (signUpInputName.value == "" || signUpInputEmail.value == "" || signUpInputPassword.value == "") {
        emailRepeatedWarning.innerHTML = "all input are required ";
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-success", "text-danger");
        return false;
    }


    return (validateInputName()) & (validateSignUpInputEmail()) & (validateSignUpInputPassword());
}

function validateInputName() {
    regex = /^[A-Z][a-z]{3,15}$/;
    if (regex.test(signUpInputName.value)) {
        console.log("S");
        return true;
    }

    else {
        emailRepeatedWarning.innerHTML = "Name must start with capital letter  ";
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-success", "text-danger");
        return false;
    }
}

function validateSignUpInputEmail() {
    regex = /^\w{4,}[@](yahoo|gmail|hotmail)\.com$/;
    if (regex.test(signUpInputEmail.value)) {
        console.log("T");
        return true;
    }
}

function validateSignUpInputPassword() {
    regex = /^.{8,}$/;
    if (regex.test(signUpInputPassword.value)) {
        console.log("zx");
        return true;
    }
    else {
        emailRepeatedWarning.innerHTML = "password must contain (alLeast 8 chars with special chars and numbers) ";
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-success", "text-danger");
        return false;
    }
}