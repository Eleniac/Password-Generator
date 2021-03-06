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

  //prompts user to enter 8-128 characters to determine the length of their password
  var length = prompt(
    "Please write the number of characters you would like your password to be. Please keep the length you select between 8-128."
  );
  //where the selected length and characters will be stored
  var selectedCharacters = [];

  // if the length is less than 8 or greater than 128 
  if (length < 8 || length > 128) {
 // return to gathering the correct length if the user inputs a number less than 8 and greater than 128
    return "Please pick a number between 8-128 and click the Generate Password button"

  }  //if length variable is not a number alert user and restart the function
  if (isNaN(length)){
    alert("Enter a valid number between 8-128")
    generatePassword()
  }
  var uppercase = confirm("Do you want to use an uppercase letter?");
  var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z",];

// if they pick true or "okay" the contents of uppercaseCharacters will be added to the selected characters pool
  if (uppercase) {
    selectedCharacters=selectedCharacters.concat(uppercaseCharacters);
  }

  var lowercase = confirm("Do you want to use a lowercase letter?");
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f" ,"g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s" ,"t", "u", "v", "w", "x", "y", "z"]

// if they pick true or "okay" the contents of lowercaseCharacters will be added to the selected characters pool
  if (lowercase) {
    selectedCharacters=selectedCharacters.concat(lowercaseCharacters);
  }

  var numericValue = confirm("Do you want to use a numeric value?");

  var numericCharacters = ["1", "2", "3","4","5", "6", "7", "8", "9", "10"]

// if they pick true or "okay" the contents of numericharacters will be added to the selected characters pool
  if (numericValue) {
    selectedCharacters=selectedCharacters.concat(numericCharacters);
  }

  var special = confirm("Do you want to use special characters?");
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}", "[", "]", ":", ";", "'", ".", "<", ".", "/", "?", "|"]

// if they pick true or "okay" the contents of specialcharacters will be added to the selected characters pool
  if (special) {
    selectedCharacters=selectedCharacters.concat(specialCharacters);
  }
  //if the user clicks false for all the characters it will bring them to the start to try again
if (special=== false && numericValue=== false && lowercase=== false && uppercase=== false) {
alert("Please start over you did not enter the correct criteria to create the password.Thank you!");
generatePassword()
}
  //password is generated using a for loop and math random from the selectedCharacters pool
var password = ""
for (var i = 0; i<length; i++) {
 var index = Math.floor(Math.random() * selectedCharacters.length) 
 var randomchar = selectedCharacters[index]
 
 password=password+randomchar
} //password funtion
return password;
}

