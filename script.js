window.onload = () => {

  const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  const numberCharacters = "1234567890";
  const specialCharacters = "\\!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";
  var selectedCharacters = "";

  const chooseLength = prompt("Choose a password length between 8-128 characters.");
  if (chooseLength < 8) {
    alert("Password must be at least 8 characters.");
  }
  else if (chooseLength > 128) {
    alert("Password must be less than 128 characters.");
  }
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
      }
  }
  console.log(selectedCharacters);
  
  function generatePassword() {
    var randomIndex = "";
    for (var i = 0; i < chooseLength.length; i++) {
      randomIndex += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    } 
    return randomIndex;
  }

  const password = generatePassword();
  alert("New password: ", password);

    // Write password to the #password input
  function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }

// Add event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


  




}


// // Assignment Code

// function generatePassword() {
//   const randomValue = Math.floor(Math.random() * upperArray.length);

//   return randomValue;
// }


// const charactersArray = Array.from(upperCharacters + lowerCharacters + numberCharacters + specialCharacters);
// console.log (charactersArray);

