function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});
document.getElementById("calcultor").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const typedNumberField = document.getElementById("typed-number");
  const pereviousTypedNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      const digits = pereviousTypedNumber.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      typedNumberField.value = remainingDigits;
    }
  } else {
    const newTypedNumber = pereviousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});

document.getElementById("veryfy-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;
  const typedNumberField = document.getElementById("typed-number");
  const typedNumber = typedNumberField.value;
  const pinSuccesMessage = document.getElementById("pin-succes");
  const pinFailureMessage = document.getElementById("pin-failure");
  if (typedNumber == currentPin) {
    pinSuccesMessage.style.display = "block";
    pinFailureMessage.style.display = "none";
  } else {
    pinFailureMessage.style.display = "block";
    pinSuccesMessage.style.display = "none";
  }
});
