module.exports.function = function plusOperation (leftOperand, rightOperand) {
  const console = require('console');
  
  let name = '더하기';
  let result = leftOperand + rightOperand;
  console.log('name: ' + name);
  console.log('result: ' + result);
  return {
    result: result,
    operatorName: name,
  };
}
