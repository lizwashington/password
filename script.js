// Assignment code here
// create a variable for each of the character types
// create a variable for a user choice string = ""
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// prompt user for password length 
// If the password length is less than 8 or greater than 128 alert user and return
// Confirm if the user wants one of the four types of characters Uppercase Lowercase Special and Numbers
// If they do want the type then concat/ add those characters to the user choices string
// Confirm if Uppercase
// Confirm if Lowercase
// Confirm if Special
// Confirm if Numbers 

// Create a password variable that = empty quotes
// For Loop where it runs a number equal to the password length 
// Inside the loop generate a random number 
// Use that random number with .char@ to get a random character from the user choice string
// Cancat/ add the random character to the password variable 
// outside the loop return the password variable 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log (generateBtn)
// Write password to the #password input
function writePassword() {
  console.log ("clicked")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);