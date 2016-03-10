/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = (function(){
  var _memory = 0;
  var _total = 0;
  var calc = {
  };
  function load(x) {
    if (typeof x !== 'number') {
      throw new Error('Not a real number');
    }
      _total = x;
      return _total;
  }
  function getTotal() {
      return _total;
  }
  function add(x) {
    if (typeof x !== 'number') {
      throw new Error('Not a real number');
    }
     _total += x;
     return _total;
  }
  function subtract(x){
    if (typeof x !== 'number') {
      throw new Error('Not a real number');
    }
     _total -= x;
     return _total;
  }
  function multiply(x) {
    if (typeof x !== 'number') {
      throw new Error('Not a real number');
    }
     _total *= x;
     return _total;
   }
   function divide(x) {
    if (typeof x !== 'number') {
      throw new Error('Not a real number');
    }
     _total /= x;
     return _total;
   }
  function recallMemory() {
      return _memory;
   }
  function saveMemory() {
      _memory = _total;
      return _memory;
   }
  function clearMemory() {
      _memory = 0;
      return _memory;
   }
   function resetMemory() {
      _total = _memory;
      return _total;
   }

return {
           load : load,
       getTotal : getTotal,
            add : add,
       subtract : subtract,
       multiply : multiply,
         divide : divide,
   recallMemory : recallMemory,
     saveMemory : saveMemory,
    clearMemory : clearMemory,
    resetMemory : resetMemory
   };
});


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

//WHEN MESSGAGE RIGHT PUSH TO ARRAY