const errormsg = "Nuk është valid";
const validmsg = "Është valide";
let form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = document.getElementById("fullname");
  validoEmrin(fname);

  let lname = document.getElementById("lastname");
  validoEmrin(lname);

  let email = document.getElementById("email");
  validoEmail(email);

  let phone = document.getElementById("phone");
  validoTel(phone);

  let msg = document.getElementById("msg");
  validotext(msg);
});

function validoEmrin(input) {
  let errorSpan = input.parentElement.querySelector(".error");

  if (input.value == "" || input.value.length < 3) {
    errorSpan.innerHTML = errormsg;
  } else {
    errorSpan.innerHTML = "";
  }
}

function validoEmail(mailinput) {
  let errorSpan = mailinput.parentElement.querySelector(".error");

  let mail_format =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mailinput.value.match(mail_format)) {
    errorSpan.innerHTML = "";
    // document.getElementById("email").focus();
  } else {
    errorSpan.innerHTML = errormsg;
    // document.getElementById("email").focus();
  }
}

function validoTel(inputnumber) {
  let errorSpan = inputnumber.parentElement.querySelector(".error");
  var phoneform =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (inputnumber.value.match(phoneform)) {
    errorSpan.innerHTML = "";
  } else {
    errorSpan.innerHTML = errormsg;
  }
}
function validotext(inputtxt) {
  let errorSpan = inputtxt.parentElement.querySelector(".error");

  if (inputtxt.value == "" || inputtxt.value.length < 10) {
    errorSpan.innerHTML = errormsg;
  } else {
    errorSpan.innerHTML = "";
  }
}