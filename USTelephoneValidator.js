function telephoneCheck(str) {
  // if any possible answer in regex form .test(str) = true, return true;
  let regex = /^1*\s*[(]\d{3}[)]\s*\d{3}\s*[-]*\d{4}$/gi
  let regex2 = /^[1]{0,1}\s*\d{3}\s*[-]*\d{3}\s*[-]*\d{4}$/gi
  if (regex.test(str) || regex2.test(str)){
    return true;
  }
  return false;
}

telephoneCheck("555-555-5555");
