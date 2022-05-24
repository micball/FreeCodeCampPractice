function rot13(str) {
  let arr = [];
  let newStr = '';
  for (let i =0; i < str.length; i++){
    arr.push(str[i]);
  }
  // character codes for the array
  arr = arr.map(x=>x.charCodeAt())
for ( let i = 0; i < arr.length; i++){
 if (arr[i] > 90 || arr[i] < 65){
   // do nothing
 } else{
   if (arr[i]+13 > 90){
     arr[i] = arr[i]-13;
   } else {
     arr[i] = arr[i]+13;
   }
 }
}
for (let i=0; i < arr.length; i++){
  newStr = newStr + String.fromCharCode(arr[i])
  }

  return newStr;
}

rot13("SERR PBQR PNZC");

// 65 through 90 - ABC's caps
