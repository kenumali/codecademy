/*
Calculate if you're getting enough sleep each week.
Objective: Write a caulcator that calculates sleep debt. 
The program will ask a user how many hours of sleep is ideal each night, then compare that to the actual hours they slept each night of the last week.
Then, it will calculate the amount of hours over or under they are to their sleep goal.
*/

function getSleepHours(day){
  var hours = prompt('How many hours of sleep you get on ' + day + ' ?');
  return Number(hours);
}

function getActualSleepHours(){
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}

function getIdealSleepHours(){
  var idealHours = prompt('How much hours of sleep is ideal per night?');
  return Number(idealHours) * 7;
}

function calculateSleepDebt(){
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('You got perfect amount of sleep!');
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + 'more sleep than needed!');
  } else {
    console.log('You got '+ (idealSleepHours - actualSleepHours)+'hours of sleep. Get some sleep!');
  }
}

calculateSleepDebt();
