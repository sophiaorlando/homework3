// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input



function generatePassword() {
  var rndmPassword = "";

  // ------------prompts--------------------------------------
  var promptLength = prompt(
    "Please enter a length between 8 to 128 characters"
  );
  var isUppercase = confirm(
    "Include uppercase letters?"
  );
  var isLowercase = confirm(
    "Include lowercase letters?"
  );
  var isCharactertype = confirm(
    "Include charactertypes?"
  );
  var isNumeric = confirm(
    "Include numeric values?"
  );
  // console.log("The length is: " + promptLength);
  // console.log("The uppercase letter is: " + uppercase);
  // console.log("The lowercase letter is: " + lowercase);
  // console.log("The character type is: " + charactertype);
  // console.log("The numeric value is: " + numeric);




  // ----------------------------Arrays--------------------------------
  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];



  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];



  var charactertype = [
    "!", "@", "#", "$", "%", "^", "&", "*"
  ];


  var numeric = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
  ];

  var allarrays = []

  //--------------------------------If/Else Statements--------------------------------

  if (isUppercase) {
    allarrays = allarrays.concat(uppercase)
  }
  if (isLowercase) {
    allarrays = allarrays.concat(lowercase)
  }
  if (isCharactertype) {
    allarrays = allarrays.concat(charactertype)
  }
  if (isNumeric) {
    allarrays = allarrays.concat(numeric)
  }
  console.log(allarrays)

  //--------------------------------Where passwd returns--------------------------------


  for (let index = 0; index < promptLength; index++) {
    var arrayvalue = allarrays[Math.floor(Math.random() * allarrays.length)];
    rndmPassword = rndmPassword + arrayvalue
  }
  return rndmPassword;
}


// function definitions -========================================

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


