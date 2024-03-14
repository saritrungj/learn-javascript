const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visa-btn');
const mastercardBtn = document.getElementById('mastercard-btn');
const paypalBtn = document.getElementById('paypal-btn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('sub-result');
const paymentResult = document.getElementById('payment-result');


mySubmit.onclick = () => {
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribed!`;
  } else {
    subResult.textContent = `You are not subscribed!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa!`;
  }
  else if (mastercardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard!`;
  }
  else if (paypalBtn.checked) {
    paymentResult.textContent = `You are paying with Paypal!`;
  } else {
    paymentResult.textContent = `You must be select payment type!`;
  }
};