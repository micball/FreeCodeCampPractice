function smallestCommons(arr) {
  // Discover which number is biggest and save it to proper variables
  let litNum = 0;
  let bigNum = 0;
  if (arr[0] == arr[1]){
      return arr[0];
    } else if (arr[0] > arr[1]){
      bigNum = arr[0];
      litNum = arr[1];
    } else if (arr[0] < arr[1]){
      bigNum = arr[1];
      litNum = arr[0];
  };
  // Create an array with every number that has to be tested.
  let testArr = [];
  for (let i = litNum; i < bigNum+1; i++){
    testArr.push(i);
  }
  let counter = bigNum;
  // Trim the array for redundancy?
    // Trim the largest number
    // Trim anything that is a denominator of the largest number
  //Create a function that checks if a given number is a denominator of the number currently in the counter variable.
function test(inputNum) {
  if (counter % inputNum === 0){
    return true;
  } else {
    return false;
  }
}
// Create a while loop that cycles through counter variables until it finds one that works.
while (true){
  let clock = 0;
  for (let i = 0; i < testArr.length; i++){
    if (test(testArr[i]) === true){
      clock++;
    } else {
      i = -1;
      clock = 0;
      counter = counter + bigNum;
    }
    if (clock == testArr.length){
      return counter;
    }
  }
  }

}

smallestCommons([1,5]);
