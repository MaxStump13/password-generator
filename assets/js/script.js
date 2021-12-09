// Assignment Code

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strUpper = uppercase.split("");
// console.log(strUpper);
var strLwr = lowercase.split("");
// console.log(strLwr);
var numbers = "0123456789";
var strNum = numbers.split("");
// console.log(strNum);
var backslash = "\u005C";
// console.log(backslash);
var special = [
  " ",
  ",",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\u005C",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// console.log(special);
// var list = [strLwr, strUpper,strNum,special];
// console.log(list[0]);
// list.splice(0,1);
//  console.log(list);
function generatePassword() {
  do{
  var lwrChoice = confirm("Would you like to include lower case letters?");
  var uppChoice = confirm("Would you like to include upper case letters?");
  var numChoice = confirm("Would you like to include numbers?");
  var speChoice = confirm("Would you like to include special characters?");
    if(lwrChoice === false && uppChoice === false && numChoice === false && speChoice === false){
      alert("You need to select at least one field");
    }
  }  
  while(lwrChoice === false && uppChoice === false && numChoice === false && speChoice === false);
      
  do{
  var passLength = prompt("Choose a password length between 8 and 128.");
    if(passLength<8 || passLength>128){
      alert("The password must be between 8 and 128 characters")
    }
  }
  while(passLength<8 || passLength>128);
  parseInt(passLength);
  console.log(passLength);
  var selections = [lwrChoice, uppChoice, numChoice, speChoice];
  var list = [strLwr, strUpper, strNum, special];
  for (var x = list.length - 1; x >= 0; x--) {
    if (selections[x] == false) {
      list.splice(x, 1);
    }
  }
  var genPass = "";
  outerLoop: for (var j = 0; j < passLength; j++) {
    for (var i = 0; i < list.length; i++) {
      var index = Math.floor(Math.random() * list[i].length);
      var genPass = genPass + list[i][index];
      // console.log(index);
      if (genPass.length == passLength) {
        break outerLoop;
      }
    }
  }

  
  // console.log(genPass);
  // console.log(genPass.length);

  var shufPass = genPass;
  function shuffle() {
    var arrPass = shufPass.split("");
    console.log(arrPass);
    arrPass.sort(function () {
      return 0.5 - Math.random();
    });
    shufPass = arrPass.join("");
    console.log(shufPass);
    return shufPass;
  }
  var password = shuffle(genPass);
  console.log(password);
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
