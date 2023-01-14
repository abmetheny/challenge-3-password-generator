const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "1234567890";
const specialCharacters = " \\!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";
var selectedCharacters = "";

function generatePassword() {

// User chooses how long to make the password.
  const chooseLength = prompt("Choose a password length (must be between 8-128 characters).");
  if (isNaN(chooseLength) == true) {
    alert("Password length must be a number.  Please start again.");
    return "";
  }
    else if (chooseLength < 8) {
      alert("Password must be at least 8 characters.  Please start again.");
      return "";
    }
    else if (chooseLength > 128) {
      alert("Password must be less than 128 characters.  Please start again.");
      return "";
    }

  // User selects which type of characters to include.
  else {
    const confirmLower = confirm("Include lowercase letters?");
      if (confirmLower == true) {
        selectedCharacters += lowerCharacters;
      }
    const confirmUpper = confirm("Include uppercase letters?");
      if (confirmUpper == true) {
        selectedCharacters += upperCharacters;
      }
    const confirmNumber = confirm("Include numbers?");
      if (confirmNumber == true) {
        selectedCharacters += numberCharacters;
      }
    const confirmCharacter = confirm("Include special characters?");
      if (confirmCharacter == true) {
        selectedCharacters += specialCharacters;
        alert("Password ready!");
      }
      else if ((confirmLower == false) && (confirmUpper == false) && (confirmNumber == false) && (confirmCharacter == false)) {
        alert("Password must contain at least one character type.  Please start again.");
      }
      else {
      alert("Password ready!");
    }
    
    // Randomly selects characters from the subset of user-defined character types.
    var randomIndex = "";
    for (var i = 0; i < chooseLength; i++) {
      randomIndex += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    } 
    return randomIndex;
  }

}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Adds event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);