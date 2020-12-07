const operation = getOperation();
const numbersCount = getNumbersCount();
const numbers = getNumbers(numbersCount);
const result = calculator(operation, numbers);
showResult(operation, numbers, result);

function getOperation() {
  let operation;
  do {  
    operation = prompt('What operation do you want to do?', '+ - * /');
  }
  while (isOperationValid(operation));
  return operation;
}
function isOperationValid(operation) {
  return (operation != '+' && operation != '-' && operation != '*' && operation != '/');
}

function getNumbersCount() {
  let count;
  do {
    count = +prompt('Enter the number of numbers', 'from 2 to 5');
  }
  while (!isCountValid(count));
  return count;
}
function isCountValid(count) {
  return !isNaN(count) && count >= 2 && count <= 5;
}

function getNumbers(count) {
  const numbers = [];
  for (let i = 1; i <= count; i++) {
    numbers.push(getNumber(i));
  }
  return numbers;
}

function getNumber(numberName) {
  let number;
  do {
    number = +prompt('Enter the number ' + numberName);
  }
  while (!isNumeric(number)); 
  return number;
}
function isNumeric(number) {
  return !isNaN(number);
}

function calculator(operator, operands) {
  let result;
  switch(operator) {
    case '+' : result = add(operands); break; 
    case '-' : result = subtract(operands); break;
    case '*' : result = multiply(operands); break;
    case '/' : result = division(operands); break;
  } 
  return result;
}
function add(operands) {
  return operands.reduce((acc, operand)=> acc + operand);
}
function subtract(operands) {
  return operands.reduce((acc, operand)=> acc - operand);
}
function multiply(operands) {
  return operands.reduce((acc, operand)=> acc * operand);
}
function division(operands) {
  return operands.reduce((acc, operand)=> acc / operand);
}

function showResult(operator, operands, total) {
  alert(`operation result ${operands.join(` ${operator} `)} = ${total}`);
}