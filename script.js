// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options

  function getPasswordOptions() {

  var passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters."));

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be between 8 and 128 characters.");

    return null;
  }

  var includeLowerCase = confirm("Do you want your password to include lowercase characters?");
  var includeUpperCase = confirm("Do you want your password to include uppercase characters?");
  var includeNumbers = confirm("Do you want your password to include numbers?");
  var includeSpecial = confirm("Do you want your password to include special characters?");

    return {
      length: passwordLength,
      lowercase: includeLowerCase,
      uppercase: includeUpperCase,
      numbers: includeNumbers,
      special: includeSpecial
  };
}

// Function for getting a random element from an array

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// Function to generate password with user input

function generatePassword() {

var generateBtn = document.querySelector('#generate');
var options = getPasswordOptions();
  if (!options) return "";

    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberCharacters = "0123456789";
    var specialCharacters = "!@#$%^&*()+\/'?:;.,-_~{}<>[]";

var allCharacters = "";

  if (options.lowercase) allCharacters += lowercaseLetters;
  if (options.uppercase) allCharacters += uppercaseLetters;
  if (options.numbers) allCharacters += numberCharacters;
  if (options.special) allCharacters += specialCharacters;

var password = "";

  for (let i = 0; i < options.length; i++) {
    password += getRandom(allCharacters);
  }

  return password;
}

// Get references to the #generate element

var generateBtn = document.querySelector('#generate');


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



