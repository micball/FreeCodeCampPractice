// This function adds the first two arguments of a given input.
// If the arguments are both numbers, it adds them.  If one or both of them are not numbers, it returns undefined.
// If only one argument is given, it returns a function to which accepts another argument to add to the first.  - if this isn't a number, it still returns undefined.

function addTogether() {
  let num1 = arguments[0];
  let num2 = arguments[1];
  if (typeof(num1) !== 'number'){
    return undefined;
  } else if (num2 === undefined){
    function addTwo(num2){
      if (typeof(num2) !== 'number'){
        return undefined;
      } else {
        return num1+num2;
      }
    }
    return addTwo;
  } else if (typeof(num2) !== 'number'){
    return undefined;
  } else {
    return num1 + num2;
  }
}
