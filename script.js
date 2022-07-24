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
  // confirm length
  else if (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length must be between 8 - 128 characters long.");
    var passwordLength = (prompt("Please enter a value between 8 - 128 characters."));
  // confirm criteria
  } else {
    confirmLower = confirm("Include lowercase characters?");
    confirmUpper = confirm("Include uppercase characters?");
    confirmNumeric = confirm("Include numbers?");
    confirmSpecial = confirm("Include special characters?");
  };

  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("You must choose at least one criterion.");
    confirmLower = confirm("Include lowercase characters?");
    confirmUpper = confirm("Include uppercase characters?");
    confirmNumeric = confirm("Include numbers?");
    confirmSpecial = confirm("Include special characters?");
  }
// user choices here
  var passwordCharacters = [];

  if (confirmLower) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }

  if (confirmUpper) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }

  if (confirmNumeric) {
    passwordCharacters = passwordCharacters.concat(numeric)
  }

  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(special)
  }

  console.log(passwordCharacters);
// generate the password
  var yourPassword = "";
  
  for (var i = 0; i < passwordLength; i++) {
    yourpassword = yourPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(yourPassword)
  }
  return yourPassword
}

  
