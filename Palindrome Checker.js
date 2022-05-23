function palindrome(str) {
  //Prepare the input to be tested (correct for case and remove punctuation)
  let strRev = str.toLowerCase();
  let arr = strRev.split("")
  arr = arr.filter(x => /\w/.test(x));
  arr = arr.filter(x => x != "_");
// Set up a reverse array to test the letters;
let testArr = [];
for (let i = 0; i < arr.length; i++){
  testArr.push(arr[arr.length-1-i]);
}
// Could also use arr.Prototype.reverse();
// Set up a test to check if arrays are the same forward and backward.
let check = true;
for(let i =0; i < arr.length; i++){
  if (arr[i] == testArr[i]){
    //do nothing
  } else {
    check = false;
  }
}
if (check){
  return true;
} else {
  return false;
}
}

palindrome("E-y_e");
