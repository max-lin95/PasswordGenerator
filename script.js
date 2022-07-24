// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength
var confirmLower
var confirmUpper
var confirmNumeric
var confirmSpecial

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("How many characters would you like your password to be? (8 - 128 characters");
  
  if(!passwordLength) {
    alert("Must be between 8 -128 characters.")
  }
  
  else if (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length must be between 8 - 128 characters long.");
    var passwordLength = (prompt("Please enter a value between 8 - 128 characters."));
  
  } else {
    confirmLower = confirm("Include lowercase characters?");
    confirmUpper = confirm("Include uppercase characters?");
    confirmNumeric = confirm("Include numbers?");
    confirmSpecial = confirm("Include special characters?");
  }



  
  
}