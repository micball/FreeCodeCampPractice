function truthCheck(collection, pre) {
  let check = true;
  for (let i = 0; i < collection.length; i++){
    if (collection[i][pre]){
      // Do nothing
    } else {
      check = false;
    }
  }
  if (!check){
    return false;
  } else{
    return true;
  }
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
