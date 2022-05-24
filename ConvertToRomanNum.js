function convertToRoman(num) {
    let newNum = num;
    let str = '';
    return rec(newNum, str);
  function rec(newNum, str){
    if (newNum == 0){
      return str;
    } else if (newNum >= 1000){
      newNum = newNum - 1000
      str = str+'M';
    } else if (newNum >= 900){
      newNum = newNum - 900;
      str = str + "CM";
    } else if (newNum >= 500){
      newNum = newNum - 500;
      str = str + 'D';
    } else if (newNum >= 400){
      newNum = newNum - 400;
      str = str + 'CD';
    } else if (newNum >= 100){
      newNum = newNum - 100;
      str = str + 'C';
    } else if (newNum >= 90){
      newNum = newNum - 90;
      str = str + 'XC';
    } else if (newNum >= 50){
      newNum = newNum - 50;
      str = str + 'L';
    } else if (newNum >= 40){
      newNum = newNum - 40;
      str = str + 'XL';
    } else if (newNum >= 10){
      newNum = newNum - 10;
      str = str +'X';
    } else if (newNum >= 9){
      newNum = newNum - 9;
      str = str + 'IX';
    } else if (newNum >= 5){
      newNum = newNum - 5;
      str = str + 'V';
    } else if (newNum >= 4){
      newNum = newNum - 4;
      str = str + 'IV';
    } else if (newNum >= 1){
      newNum = newNum - 1;
      str = str + 'I';
    }
  return rec(newNum, str);
  }
}
