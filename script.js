// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // call the generatePassword function and store the result in the password variable
  var password = generatePassword();
  //get the reference to the password element
  var passwordText = document.querySelector("#password");
  // Set the value of the password element to the generated password 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate a password based on user input
function generatePassword() {
  //Prompt the user for the length of the password 
  var length = promptForLength();
  // Confirm wheter to include different character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate input to ensure at least on character type is selected 
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Error: At least one character type must be selected.");
    return "";  // Return an empty string if validation fails
  }

  // Generate and return the password
  return generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
}
  // Function to prompt the user for the lenght of the password
function promptForLength() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128):"));

  // Validate length
  while (isNaN(length) || length < 8 || length > 128) {
    alert("Error: Password length must be a number between 8 and 128.");
    length = parseInt(prompt("Enter the length of the password (between 8 and 128):"));
  }
  // Return the validated lenght 
  return length;
}
  // Fuction to generate a ramdom password based on user input
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";
  // Initialize an empty string to store the valid characters based on user input
  var validChars = "";
  // Include charaters in the valid chars string based on user preferences
  if (includeLowercase) validChars += lowercaseChars;
  if (includeUppercase) validChars += uppercaseChars;
  if (includeNumeric) validChars += numericChars;
  if (includeSpecial) validChars += specialChars;
  // Initialize an empty string to store the generated password
  var password = "";
  //Generate the password by randdomly selecting characters from the valid charts string
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);
  }
  // Return the valid password 
  return password;
}