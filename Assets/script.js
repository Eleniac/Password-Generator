var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function determining the length of the password 
function generatePassword() {
  //prompts user to enter 8-12 characters to determine the length of their password
  var length = prompt(
    "Please write the number of characters you would like your password to be. Please keep the number you select between 8-128 characters."
  );
  var selectedCharacters = [];

  // if user input is less numbers than 8 or greater than 128 or not a number alert saying this is wrong
  // else continue with the rest of the prompts
  // if (conditions){write the code to run if condition is true}
  if (length < 8 || length > 128) {
  generatePassword()
  // return to gathering the correct length if the user inputs a letter or a number less than 8 and greater than 128
    return "Please pick a number between 8-128 and click the Generate Password button"
  }alert("Please choose at least one of the following character options");

  var uppercase = confirm("Do you want to use an uppercase letter?");
  var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z",];

// if statement stating if they pick true or "okay" the contents of uppercaseCharacters will be added to the selected characters pool
  if (uppercase) {
    selectedCharacters=selectedCharacters.concat(uppercaseCharacters);
  }


  var lowercase = confirm("Do you want to use a lowercase letter?");
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f" ,"g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s" ,"t", "u", "v", "w", "x", "y", "z"]

// if statement stating if they pick true or "okay" the contents of lowercaseCharacters will be added to the selected characters pool
  if (lowercase) {
    selectedCharacters=selectedCharacters.concat(lowercaseCharacters);
  }

  var numericValue = confirm("Do you want to use a numeric value?");

  var numericCharacters = ["1", "2", "3","4","5", "6", "7", "8", "9", "10"]

// if statement stating if they pick true or "okay" the contents of numericharacters will be added to the selected characters pool
  if (numericValue) {
    selectedCharacters=selectedCharacters.concat(numericCharacters);
  }

  var special = confirm("Do you want to use special characters?");
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}", "[", "]", ":", ";", "'", ".", "<", ".", "/", "?", "|"]


  if (special) {
    selectedCharacters=selectedCharacters.concat(specialCharacters);
  }

var password = ""
for (var i = 0; i<length; i++) {
 var index = Math.floor(Math.random() * selectedCharacters.length) 
 var randomchar = selectedCharacters[index]
 
 password=password+randomchar
} 
return password;
}




//CLASS README//

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password//
//THEN I am presented with a series of prompts for password criteria//
//WHEN prompted for password criteria//
//THEN I select which criteria to include in the password//
//WHEN prompted for the length of the password//
//THEN I choose a length of at least 8 characters and no more than 128 characters//
//WHEN asked for character types to include in the password//
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters//
//WHEN I answer each prompt//
///THEN my input should be validated and at least one character type should be selected//
//WHEN all prompts are answered//
////THEN a password is generated that matches the selected criteria//
//WHEN the password is generated//
//THEN the password is either displayed in an alert or written to the page//
