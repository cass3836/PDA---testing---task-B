var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add numbers correctly', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should subtract numbers correctly', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should multiply numbers correctly', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should divide numbers correctly', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

// integration tests

  it('should be able to concatenate a multiple number of button clicks', function(){
    calculator.numberClick(6);
    calculator.numberClick(9);
    assert.equal(calculator.runningTotal, 69);
  })

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.clearClick()
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 14);
  })

});
