//The Goal is basically to get a string of letters from the alphabet that is missing a letter, and return the missing letter.
// The code works for strings "abce"(d), "abcdefghjklmno"(i), "bcdf"(e), and the full alphabet (returns undefined when nothing is missing)
// For some reason, if 'stvwx' gets plugged in, the code will not generate the alphComp array to check against.

function fearNotLetter(str) {
  // Set up a correct alphabet
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // Create initial arrays
  let alphArr = []
  let strArr =[]
  for (let i = 0; i < alphabet.length; i++){
    alphArr.push(alphabet[i])
  }
  for (let i = 0; i < str.length; i++){
    strArr.push(str[i]);
  }
  // Create the array to compare the str array to
  let alphComp = alphArr.slice(alphArr.indexOf(str[0]), alphArr.indexOf(str[0] + str.length -1));
  console.log(strArr);
  console.log(alphComp)
  for (let i = 0; i < alphComp.length; i++){
    if (alphComp[i] != strArr[i]){
      return alphComp[i];
    }
  } return undefined;
}

fearNotLetter("stvwx");
