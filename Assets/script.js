var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var length = prompt("Your password needs to be between 8-128 characters in length");
console.log(length)
// if user input is less than 8 or greater than 128 or not a number alert saying yo this wrong
// else continue with the rest of the prompts
// if (conditions){write the code to run if condition is true}
if (length < 8){
alert('Try again');

generatePassword()

}else{
  var uppercase = confirm("Do you want to use an uppercase letter?");
  console.log(uppercase)
//if //else
var lowercase = confirm("Do you want to use a lowercase letter?");
console.log(lowercase)

var numericValue = confirm("Do you want to use a numeric value?");
console.log(numericValue)

var specialCharacters = confirm ("Do you want to use special characters?")
console.log(specialCharacters)

}

}





// After button is clicked, im going to use either alert prompt or confirm to provide the user with questions

// Store which criterias the user wants based on their prompts min 1 maximum of all of them using an array

// The first pop up should be a user selecting a length of a password. minimum is 8 and max is 128 using the prompt method

// After the length, the user should select if which criterias they want in their password using confirms

// we are going to generate a random password based on the criterias the user selected and using Math.random to randomize the selection











// function generate(){
//   prompt("Generate a Password");
// }
// var criteria = ["8-128 characters", "One Lowercase", "One Uppercase","One Numeric Value", "One Special Character"]

// function generatePassword(){}
    
    
// console.log(generatePassword.length); 
// console.log(criteria.length);
    
  
  
// passwordText.value = password;
// console.log(passwordText);






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

