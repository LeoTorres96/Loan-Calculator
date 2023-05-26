
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let isValid = true;
      form.querySelectorAll('input[type=text]').forEach(function(input){
          if (isNaN(input.value)) {
            isValid = false;
          }
        });
        if(!isValid){
          alert('Please enter a valid number');
      } else {
        update();
      }
    });
  } else {
    const form = document.createElement('form');
    form.id = 'calc-form';
    document.body.appendChild(form);
  }
  
  const calcForm = document.querySelector('#calc-form');
  calcForm.addEventListener('submit', function(event) {
    let isValid = true;
    calcForm.querySelectorAll('input[required]').forEach(function(input) {
    if (!input.value){
        isValid = false;
      }
    });
    if(!isValid){
      event.preventDefault();
      alert('Please fill in all required fields');
    }
  });
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 10000, years: 10, rate: 4.5};
  document.getElementById('loan-amount').value = values.amount;
  document.getElementById('loan-years').value = values.years;
  document.getElementById('loan-rate').value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) / 
    (1 - Math.pow((1 + monthlyRate), -n))
    ).toFixed(2);
  }
  
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const monthlyUI = document.getElementById('monthly-payment');
    monthlyUI.innerText = '$' + monthly;
  }
  