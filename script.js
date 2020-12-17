// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var special = ['@', '#', '&', '!', '?', '%', '*', '~', '/', '$']
  var restart = true
  var LengthOfPassword

  while (restart) {
    LengthOfPassword = prompt('How long do you want your password to be? 8-128 charachers')
    if (LengthOfPassword < 8 || LengthOfPassword > 128) {
      alert('Please try again with a number between 8-128!');
      restart = true;
    }
    else {
      restart = false;
    }
  }
  var tiny = confirm("Do you want any lowercase letters in your password?")
  var large = confirm('Do you want any uppercase letters in your password?')
  var digit = confirm('Do you want any numbers in your password?')
  var asterik = confirm('Do you want any special characters in your password?')
  var password2 = []

  var smallLetter
  var Capital
  var tally
  var dollarSign
  var count = 0

  while (count < LengthOfPassword) {

    if (tiny) {
      smallLetter = Math.floor(Math.random() * lowerCase.length);
      password2.push(lowerCase[smallLetter]);
      count++;
    }
    if (large) {
      Capital = Math.floor(Math.random() * upperCase.length);
      password2.push(upperCase[Capital]);
      count++;
    }
    if (digit) {
      tally = Math.floor(Math.random() * num.length);
      password2.push(num[tally]);
      count++;
    }
    if (asterik) {
      dollarSign = Math.floor(Math.random() * special.length);
      password2.push(special[dollarSign]);
      count++;
    }

  }
  
return password2;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


