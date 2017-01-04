/*
This program makes sure that a password is complex so that it cannot be easily guessed.
This password validator will check multiple aspects of a potential password and will report back to the user if their password meets a set of rules.
The rules are:
1. Has at least one uppercase letter
2. Has at least one lowercase letter
3. Is at least 8 characters long
4. Has at least one special character
*/

function isPasswordValid(input){
  if(hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input)){
     console.log('Password valid!');
  }
  if(!hasUpperCase(input)) {
    console.log('Password should have at least one uppercase letter!');
  }
  if(!hasLowerCase(input)) {
    console.log('Password should have at least one lowercase letter!');
  }
  if(!isLongEnough(input)) {
    console.log('Password should have at least 8 characters!');
  }
  if(!hasSpecialCharacter(input)) {
    console.log('Password should have at least 1 special character!');
  }
}

function hasUpperCase(input) {
  for(var i=0; i < input.length; i++) {
    if(input[i] === input[i].toUpperCase()){
      return true;
    }
  }
}

function hasLowerCase(input) {
  for(var i=0; i < input.length; i++) {
    if(input[i] === input[i].toLowerCase()){
      return true;
    }
  }
}

function isLongEnough(input) {
  return input.length >= 8;
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['`', '', '!', '"', '', '$', '', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', ';', ':', '@', '\'', '~', '#', '<', '>', ',', '.', '?', '/'];
  for(var i=0; i < input.length; i++) {
    for(var j=0; j < specialCharacters.length; j++) {
      if(input[i] === specialCharacters[j]){
        return true;
      }
    }
  }
}
