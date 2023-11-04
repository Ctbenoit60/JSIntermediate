// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today
const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + " minutes have passed so far today");

// b) Print the total number of seconds that have passed so far today
const totalSeconds = totalMinutes * 60 + today.getSeconds();
console.log(totalSeconds + " seconds have passed so far today");

// c) Calculate and print your age as: 'I am x years, y months and z days old'
const birthDate = new Date("1993-06-01"); // Replace 'Your Birth Date Here' with your actual birth date
const ageInMilliseconds = today - birthDate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;
const ageInYears = ageInDays / 365.25; // Allowing for leap years

const years = Math.floor(ageInYears);
const months = Math.floor((ageInYears - years) * 12);
const days = Math.floor(ageInDays - (years * 365.25 + months * (365.25 / 12)));

console.log(`I am ${years} years, ${months} months, and ${days} days old`);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
function daysInBetween(date1, date2) {
  const timeDifference = Math.abs(date2 - date1);
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

const date1 = new Date("1993-06-01");
const date2 = new Date("2023-12-31");
const daysBetween = daysInBetween(date1, date2);
console.log(`Days between date1 and date2: ${daysBetween}`);
