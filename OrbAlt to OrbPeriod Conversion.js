function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  for (let i = 0; i < arr.length; i++){
    if (arr[i].hasOwnProperty("avgAlt")){
        let averageAlt = arr[i].avgAlt;
        let orbPer = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+averageAlt, 3)/GM));
        delete arr[i].avgAlt;
        arr[i].orbitalPeriod = orbPer;
    }
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
