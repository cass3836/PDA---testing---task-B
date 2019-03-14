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
  //
  // - `calculator.add()` - add 1 to 4 and get 5
  // - `calculator.subtract()` subtract 4 from 7 and get 3
  // - `calculator.multiply()` - multiply 3 by 5 and get 15
  // - `calculator.divide()` - divide 21 by 7 and get 3

});
