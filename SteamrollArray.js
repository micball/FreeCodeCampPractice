function steamrollArray(arr) {
  let flatArr = [];
  function arrTest(test){
    if (Array.isArray(test)){
      return true;
    } else {
      return false;
    }
  }
for (let i = 0; i < arr.length; i++){
  if (arrTest(arr[i] == true) {
    flatArr.push(...steamrollArray(arr[i]))
  } else {
    i = -1;
  }
}
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
