window.onload = () => {
  const chooseLength = prompt("Choose a password length between 8-128 characters.");
  if (chooseLength < 8) {
    alert("Password must be at least 8 characters.");
  }
  else if (chooseLength > 128) {
    alert("Password must be less than 128 characters.");
  }
  else {
    confirm("Include lowercase letters?");
    confirm("Include uppercase letters?");
    confirm("Include numbers?");
    confirm("Include special characters?");
  }






}


// Assignment Code

function generatePassword() {
  const randomValue = Math.floor(Math.random() * upperArray.length);

  return randomValue;
}

const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const upperArray = Array.from(upperCharacters);
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "1234567890";
const specialCharacters = "\\!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";
const charactersArray = Array.from(upperCharacters + lowerCharacters + numberCharacters + specialCharacters);
console.log (charactersArray);

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
