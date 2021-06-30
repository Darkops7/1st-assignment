
let phone_number = document.getElementById("phone");
let email = document.getElementById("email");
let error = document.getElementById("error");
let number = document.getElementById("number");
let pwd = document.getElementById("pwd");
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
function inputNumber() {
    let exp =  /^[7-9](\d{2})[-. ]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/;
    if (exp.test(phone.value)){
        number.innerHTML = "valid";
        number.style.color = "green";
        phone.style.border = "3px solid green";
    }
    else{
        number.innerHTML = "Please enter a valid phone number";
        number.style.color = "red";
        phone.style.border = "3px solid red";
        return false;
    }
}














let parameters = {
    capitals: false,
    count : false,
    letters : false,
    numbers : false,
    special : false
}
let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker(){
    let password = document.getElementById("password").value;


    parameters.capitals = (/[A-Z]+/.test(password))?true:false;
    parameters.letters = (/[A-Za-z]+/.test(password))?true:false;
    parameters.numbers = (/[0-9]+/.test(password))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
    parameters.count = (password.length > 16)?true:false;

    let barLength = Object.values(parameters).filter(value=>value);

    console.log(Object.values(parameters), barLength);

    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");
    for( let i = 0; i < spanRef.length; i++){
        switch(spanRef.length - 1){
            case 0 :
                spanRef[i].style.background = "#ff3e36";
                msg.textContent = "Your password is very weak";
                break;
            case 1:
                spanRef[i].style.background = "#ff691f";
                msg.textContent = "Your password is weak";
                break;
            case 2:
                spanRef[i].style.background = "#ffda36";
                msg.textContent = "Your password is good";
                break;
            case 3:
                spanRef[i].style.background = "#0be881";
                msg.textContent = "Your password is strong";
                break;
        }
    }
}

let password = document.getElementById("password").value;
let password2 = document.getElementById("pswd").value;

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('pswd').value) {
      document.getElementById('pwd').innerHTML = 'Password Confirmed';
      document.getElementById('pwd').style.color = 'green';
    } else {
      document.getElementById('pwd').style.color = 'red';
      document.getElementById('pwd').innerHTML = 'Password does not match';
      return false;
    }
  }