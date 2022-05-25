[ [ 'ONE HUNDRED', 100 ],
  [ 'TWENTY', 60 ],
  [ 'TEN', 20 ],
  [ 'FIVE', 55 ],
  [ 'ONE', 90 ],
  [ 'QUARTER', 4.25 ],
  [ 'DIME', 3.1 ],
  [ 'NICKEL', 2.05 ],
  [ 'PENNY', 1.01 ] ]

function checkCashRegister(price, cash, cid) {
  let totPen = cid[0][1]/0.01;
  let totNic = Math.round(cid[1][1]/0.05);
  let totDim = cid[2][1]/0.10;
  let totQua = cid[3][1]/0.25;
  let totOne = cid[4][1]/1;
  let totFiv = cid[5][1]/5;
  let totTen = cid[6][1]/10;
  let totTwe = cid[7][1]/20;
  let totHun = cid[8][1]/100;
  let totalFunds = 0;
  let changeDue = cash - price;
  for(let i =0; i < cid.length; i++){
    totalFunds = Math.round(totalFunds + cid[i][1]);
  }
  // Check for insufficient funds (use a for loop to add up the toal in the register)
  if (price > totalFunds){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  // closed if total in register = price
  if (price == totalFunds){
    return {status: "CLOSED", change: cid};
  }
  // open and change with change in coins and bills osrted highest to lowest
  if (price < totalFunds){

  }
  // effectively, I need to use the same thing I did for roman numerals , but with coins and cash to find if I have change for it.
  let revArr = cid.reverse()
  console.log(revArr)
  console.log(changeDue)
  function romNum(changeDue, revArr){
    if (changeDue == 0){
      return revArr;
    }
    if (Math.floor(changeDue/100) >= 1 && revArr[0][1] >= 100){
      revArr[0][1]=revArr[0][1]-100
      changeDue = changeDue - 100;
      } else if (Math.floor(changeDue/20) > 0 && revArr[1][1] >= 20){
        revArr[1][1] = revArr[1][1] - 20;
        changeDue = changeDue - 20;
      } else if (Math.floor(changeDue/10) > 0 && revArr[2][1] >= 10){
        revArr[2][1] = revArr[2][1] - 10;
        changeDue = changeDue - 10;
      } else if (Math.floor(changeDue/5) > 0 && revArr[3][1] >= 5){
        revArr[3][1] = revArr[3][1] - 5;
        changeDue = changeDue - 5;
      } else if (Math.floor(changeDue/1) > 0 && revArr[4][1] >= 1){
        revArr[4][1] = revArr[4][1] -1;
      }
    }
 
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
