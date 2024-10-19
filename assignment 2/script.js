//Assignment 2 : The Calculator

//Your task: Build a beautiful calculator, based on the following USER STORIES:
//User story: I can add, subtract, multiply, and divide two numbers.
//User story: I can clear the input field with a clear button.
//User story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.
//Technologies to use: JavaScript, CSS (and Bootstrap), HTML

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

const updateDisplay = () => {
  const display = document.querySelector(".screen");
  display.value = calculator.displayValue;
};
updateDisplay();

const keys = document.querySelector(".keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  else if(target.classList.contains('operator')){
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  else  (target.classList.contains('decimal')){
    inputDecimal(target.value);
    updateDisplay();
    return;
  }


  
  
});
