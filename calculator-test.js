
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 10043, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});

/// etc

it('Should give an error when a text field is not filled', function() {
  const isValid = function(text){
    return text.length > 0;
  }
  expect(isValid('')).toBe(false);
});

it('should not let non-numeric values entered in the text fields', function() {
  const input = function(value){
    return value.length > 0;
  }
  expect(input('')).toBe(false)
})