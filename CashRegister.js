function checkCashRegister(price, cash, cid) {
  let returnObject = {
    status: '',
    change: cid
  };

  //VARIABLES
  let totalInTill = 0;
    for (let i = 0; i < cid.length; i++){
      totalInTill += 100*(cid[i][1]);
    }
    totalInTill = totalInTill / 100;

  let changeDue = cash - price;
  let arr = cid.slice().reverse();
  let fCDue = cash - price;
  let changeCumulative = actualChange;
  let actualChange =[]
    for (let i =0; i < cid.length; i++){
      actualChange.push(cid.slice(i,1));
    }
    for (let i = 0; i < actualChange.length; i++){
      actualChange[i][1] = 0;
    }
  
  // function: changeDue calculates what the change should look like

  //THE MEAT
  if(changeDue == totalInTill){
    returnObject.status = "CLOSED";
    returnObject.change = cid;
    return returnObject;
  };
  if(changeDue > totalInTill){
    returnObject.status = "INSUFFICIENT_FUNDS";
    returnObject.change = [];
    return returnObject;
  };
  
whichChange(arr, fCDue, changeCumulative);

  //THE END RETURN
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  return returnObject;
  //FUNCTIONS
    //This function calculates the change amounts that need to be spit out.
  function whichChange(arr, fCDue, changeCumulative){
    console.log(fCDue)
  /*  
    let arr = cashLeft;
    let fCDue = due;
    let changeCumulative = actualChange;
*/
    
    if (changeDue <= 0){
      returnObject.status = "OPEN";
      returnObject.change = actualChange;
      return;
    }
    if ( fCDue >= 100 && arr[0][1] >= 100){
      arr[0][1] = arr[0][1] - 100;
      fCDue = fCDue - 100;
    } else if (fCDue >= 20 && arr[1][1] >= 20){
      arr[1][1] = arr[1][1] - 20;
      fCDue = fCDue - 20;
      fireWhatsLeft(fCDue, 1);
    } else if (fCDue >= 10 && arr[2][1] >= 10){
      arr[2][1] = arr[2][1] - 10;
      fCdue = fCDue - 10;
      fireWhatsLeft(fCDue, 2);
    } else if (fCDue >= 5 && arr[3][1] >= 5){
      arr[3][1] -= 5;
      fCDue -= 5;
      fireWhatsLeft(fCDue, 3)
    } else if (fCDue >=1 && arr[4][1] >= 1){
      arr[4][1] -= 1;
      fCDue -= 1;
      fireWhatsLeft(fCDue, 4);
    } else if (fCDue*100 >= 0.25*100 && arr[5][1]*100 >= 0.25*100){
      arr[5][1] = (arr[5][1]*100 - 0.25*100)/100;
      fCDue = (fCDue*100 - 0.25*100)/100;
      actualChange[5][1] = (actualChange[5][1]*100+0.25*100)/100;
      fireWhatsLeft(fCDue, 5);
    } else if (fCDue*100 >= 0.10*100 && arr[6][1]*100 >= 0.10*100){
      arr[6][1] = (arr[6][1]*100 - 0.10*100)/100;
      fCDue = (fCDue*100 - 0.10*100)/100;
      fireWhatsLeft(fCDue, 6);
    } else if (fCDue*100 >= 0.05*100 && arr[7][1]*100 >= 0.05*100){
      arr[7][1] = (arr[7][1]*100 - 0.05*100)/100;
      fCDue = (fCDue*100 - 0.05*100)/100;
      fireWhatsLeft(fCDue, 7);
    } else if (fCDue*100 >= 0.01*100 && arr[8][1]*100 >= 0.01*100){
      arr[8][1] = (arr[8][1]*100 - 0.01*100)/100;
      fCDue = (fCDue*100 - 0.01*100)/100;
      fireWhatsLeft(fCDue, 8)
    } else {
      returnObject.status = "INSUFFICIENT_FUNDS";
      returnObject.change = [];
      return;
    }
  whichChange(arr,fCDue, changeCumulative)
  }
    // This function asks how much is left after the denomination of bills you currently have
  function fireWhatsLeft(remainder, arrLevel){
    if (remainder < whatsLeft(arrLevel)){
      returnObject.status = "INSUFFICIENT_FUNDS";
      returnObject.change = [];
      return;
    }
  };
  function whatsLeft(x){
    let changeArr = cid.reverse();
    let total = 0;
    for ( let i = x; i < changeArr.length; i++){
      total = total + changeArr[i][1]*100;
    }
    return total/100;
  };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log( "problem 2")
console.log( checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
