/*
Magic Eight Ball with JavaScript.
The user will be able to input a question, then this program will output a random fortune.
*/

var userQuestion = 'Is it going to rain tonight?';
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

switch (randomNumber) {
  case 0:
   eightBall = 'It is certain';
   break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(userQuestion);
console.log(eightBall);
