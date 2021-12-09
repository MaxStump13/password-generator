// Assignment Code
var generateBtn = document.querySelector("#generate");
// Global string of all lower case letters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
//Global string of all upper case letters
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//conversion of upper case string to Global array for each letter
var arrUpper = uppercase.split("");
// conversion of lower case string to Global array for each letter
var arrLwr = lowercase.split("");
// Global string of numbers 0-9
var numbers = "0123456789";
// conversion of number string to Global array
var arrNum = numbers.split("");
// var backslash = "\u005C";
// Global array of all special characters
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
//function called by writePassword on click
function generatePassword() {
  //Verification do while loop for the user to confirm selections
  do {
    //do-while loop of confirm popups
    //if nothing is selected, alert pops up and reruns the do{}
    do {
      var lwrChoice = confirm("Would you like to include lower case letters?");
      var uppChoice = confirm("Would you like to include upper case letters?");
      var numChoice = confirm("Would you like to include numbers?");
      var speChoice = confirm("Would you like to include special characters?");
      if (
        lwrChoice === false &&
        uppChoice === false &&
        numChoice === false &&
        speChoice === false
      ) {
        alert("You need to select at least one field");
      }
    } while (
      //conditions to rerun loop
      lwrChoice === false &&
      uppChoice === false &&
      numChoice === false &&
      speChoice === false
    );
    //do-while loop to verify input on prompt pop up is within range, if not alert pops up and reruns the do{}
    do {
      var passLength = prompt("Choose a password length between 8 and 128.");
      if (passLength < 8 || passLength > 128) {
        alert("The password must be between 8 and 128 characters");
      }
    } while (
      //condition to rerun loop
      passLength < 8 ||
      passLength > 128
    );
    //puts all selections into a boolean array
    var selections = [lwrChoice, uppChoice, numChoice, speChoice];
    //Confirmation that selected data is what is wanted, if not loops back through
    var verify = confirm(
      "The criteria you selected is: (True=Yes, Fasle=No) \nLower Case: " +
        lwrChoice +
        "\nUpper Case: " +
        uppChoice +
        "\nNumbers: " +
        numChoice +
        "\nSpecial Characters: " +
        speChoice +
        "\nPassword Length: " +
        passLength +
        "\nIf this is correct, click OK!"
    );
  //Condition to rerun loop if selections are not wanted
  } while (verify == false);
  //changes data type to number
  parseInt(passLength);
  // var selections = [lwrChoice, uppChoice, numChoice, speChoice];
  //declare array of each array character type
  var list = [arrLwr, arrUpper, arrNum, special];
  //loop that checks if selections are false and removes that array from the list array, leaving in the desired characters
  for (var x = list.length - 1; x >= 0; x--) {
    if (selections[x] == false) {
      list.splice(x, 1);
    }
  }
  //declare empty array to store random values
  var genPass = [];
  //label to break out to once the password reaches specified length
  //loop to continue inner loop until break condition is met, maximum will never reach passLength because of inner iterations/break
  outerLoop: for (var j = 0; j < passLength; j++) {
    //goes to each array and selects a random letter/character and adds them to array, breaks out when genPass has requested length
    for (var i = 0; i < list.length; i++) {
      //random index in list[i]
      var index = Math.floor(Math.random() * list[i].length);
      //adding value of the list[i] at the random index to array genPass
      genPass.push(list[i][index]);
      //check if password has reached requested length, if yes break outside, if no loop again
      if (genPass.length == passLength) {
        break outerLoop;
      }
    }
  }
  //function to randomly shuffle indeces, and convert to string
  function shuffle() {
    //random sort
    genPass.sort(function () {
      return 0.5 - Math.random();
    });
    //convert to string
    genPass = genPass.join("");
    return genPass;
  }
  //calling shuffle function and reassigning it to the genPass variable as a string
  genPass = shuffle(genPass);
  return genPass;
}
// Write password to the #password input
//Calls generatePassword function, then takes that string and displays it on the screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
