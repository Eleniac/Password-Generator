// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//series of prompts for password criteria//
//Length of Password Criteria 8-128 characters//
//confirm whether it is lowercase, uppercase, numeric, and/or special characters
