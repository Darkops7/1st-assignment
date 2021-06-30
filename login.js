let email = document.getElementById("email");

let error = document.getElementById("error");

function validate(){
    
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (regexp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color = "green";
        email.style.border = "3px solid green";
    }
    else{
        error.innerHTML = "Please enter a valid email id";
        error.style.color = "red";
        email.style.border = "3px solid red";
        return false;
    }
}