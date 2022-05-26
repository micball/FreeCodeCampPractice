function checkCashRegister(price, cash, cid) {
  let returnObject = {
    status: "INSUFFICIENT FUNDS",
    change: []
  };

  //VARIABLES
  let totalInTill = 0;
    for (let i = 0; i < cid.length; i++){
      totalInTill += 100*(cid[i][1]);
    }
    totalInTill = totalInTill / 100;
  let changeDue = (cash*100 - price*100)/100;
  let arr = []
    for (let i = 0; i <cid.length; i++){
      arr.push(cid[i].slice())
    }
    arr.reverse();
  let fCDue = (cash - price)*100;
  console.log(cid);
  let actualChange = [];
    for (let i = 0; i <cid.length; i++){
      actualChange.push(cid[i].slice())
    };
    for (let i = 0; i < actualChange.length; i++){
      actualChange[i][1] = 0;
    }
console.log(actualChange);
console.log(cid);
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

whichChange();

  //THE END RETURN
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  //console.log(actualChange)
  return returnObject;
  //FUNCTIONS
    //This function calculates the change amounts that need to be spit out.
  function whichChange(){
    let check = fCDue;
    //console.log(fCDue)
    
  /*  
    let arr = cashLeft;
    let fCDue = due;
    let changeCumulative = actualChange;
*/
    if (fCDue <= 0){
      returnObject.status = "OPEN";
      returnObject.change = actualChange;
      return;
    }
    if ( fCDue >= 100*100 && arr[0][1]*100 >= 100*100){
      arr[0][1] = arr[0][1] - 100;
      fCDue = fCDue - 100*100;
      actualChange[0][1] =(actualChange[0][1]*100 + 100*100)/100;
    } else if (fCDue >= 20*100 && arr[1][1]*100 >= 20*100){
      arr[1][1] = arr[1][1] - 20;
      fCDue = fCDue - (20*100);
      actualChange[1][1] =(actualChange[1][1]*100 + 20*100)/100;
    } else if (fCDue >= 10*100 && arr[2][1]*100 >= 10*100){
      arr[2][1] = arr[2][1] - 10;
      fCDue = fCDue - 10*100;
      actualChange[2][1] =(actualChange[2][1]*100 + 10*100)/100;
    } else if (fCDue >= 5*100 && arr[3][1]*100 >= 5*100){
      arr[3][1] -= 5;
      fCDue =fCDue - 5*100;
      actualChange[3][1] =(actualChange[3][1]*100 + 5*100)/100;
    } else if (fCDue >= 1*100 && arr[4][1]*100 >= 1*100){
      arr[4][1] -= 1;
      fCDue =fCDue -1*100;
      actualChange[4][1] =(actualChange[4][1]*100 + 1*100)/100;
    } else if (fCDue >= 0.25*100 && arr[5][1]*100 >= 0.25*100){
      arr[5][1] = (arr[5][1]*100 - 0.25*100)/100;
      fCDue = fCDue - 0.25*100;
      actualChange[5][1] =(actualChange[5][1]*100 + 0.25*100)/100;
      //console.log(actualChange)
    } else if (fCDue >= 0.10*100 && arr[6][1]*100 >= 0.10*100){
      arr[6][1] = (arr[6][1]*100 - 0.10*100)/100;
      fCDue = fCDue - 0.10*100;
      actualChange[6][1] =(actualChange[6][1]*100 + 0.10*100)/100;
    } else if (fCDue >= 0.05*100 && arr[7][1]*100 >= 0.05*100){
      arr[7][1] = (arr[7][1]*100 - 0.05*100)/100;
      fCDue = fCDue - 0.05*100;
      actualChange[7][1] =(actualChange[7][1]*100 + 0.05*100)/100;
    } else if (fCDue >= 0.01*100 && arr[8][1]*100 >= 0.01*100){
      arr[8][1] = (arr[8][1]*100 - 0.01*100)/100;
      fCDue = fCDue - 0.01*100;
      actualChange[8][1] =(actualChange[8][1]*100 + 0.01*100)/100;
    } /*else {
      
      returnObject.status = "INSUFFICIENT_FUNDS";
      returnObject.change = [];
      
      return;
    }*/
    //console.log(arr)
    //console.log(fCDue)

    
    if (check == fCDue){
      returnObject.status = "INSUFFICIENT_FUNDS",
      returnObject.change = []
      return
    }
  whichChange()
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

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
