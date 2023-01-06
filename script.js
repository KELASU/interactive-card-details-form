const cNum = document.getElementById("number");
const cName = document.getElementById("name");
const cM = document.getElementById("month");
const cY = document.getElementById("year");
const cCvc = document.getElementById("cvc");
const mInput = document.getElementById("card_month");
const yInput = document.getElementById("card_year");
const cvcInp = document.getElementById("card_cvc");
const submitBtn = document.getElementById("submit_btn");
const afterForm = document.querySelector(".thank");
const beforeForm = document.querySelector("form");
const numberInp = document.getElementById("card_number");
const nameInp = document.getElementById("card_name");

function setCardNumber(e) {
    cNum.innerText = format(e.target.value);
}
function setCardName(e) {
  cName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cM.innerText = format(e.target.value);
}
function setCardYear(e) {
  cY.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();
    if (!nameInp.value) {
      nameInp.classList.add('error');
      nameInp.parentElement.classList.add("error_message")
    } else {
      nameInp.classList.remove("error");
      nameInp.parentElement.classList.remove("error_message");
    }
    if (!numberInp.value) {
      numberInp.classList.add('error')
      numberInp.parentElement.classList.add("error_message");
    } else if (numberInp.value.length < 16) {
        numberInp.classList.add("error")
    } else {
      numberInp.classList.remove("error");
      numberInp.parentElement.classList.remove("error_message");
    }
    if (!mInput.value) {
      mInput.classList.add("error")
      mInput.parentElement.classList.add("error_message");
    } else {
      mInput.classList.remove("error");
      mInput.parentElement.classList.remove("error_message");
    }
    if (!yInput.value) {
      yInput.classList.add("error")
      yInput.parentElement.classList.add("error_message");
    } else {
      yInput.classList.remove("error");
      yInput.parentElement.classList.remove("error_message");
    }
    if (!cvcInp.value) {
      cvcInp.classList.add("error")
      cvcInp.parentElement.classList.add("error_message");
    } else {
      cvcInp.classList.remove("error");
      cvcInp.parentElement.classList.remove("error_message");
    }
    if (nameInp.value && numberInp.value && numberInp.value.length == 16&& mInput.value && yInput.value && cvcInp.value) {
      afterForm.classList.remove("hidden");
      beforeForm.classList.add("hidden");
    }
  
}
function format(valueFormat) {
  return valueFormat.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
mInput.addEventListener("keyup", setCardMonth);
yInput.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);