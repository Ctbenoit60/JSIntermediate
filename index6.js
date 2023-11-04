// Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

function unique(duplicatesArray) {
  switch (duplicatesArray) {
    case colors:
      return colors.filter((value, index) => colors.indexOf(value) === index);
    case testScores:
      return testScores.filter(
        (value, index) => testScores.indexOf(value) === index
      );
      default:
        console.log('Not part of the IoD question');
        return null
  }
}

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

// What hit me in the last grand prix on Mario Kart?

function killJoy(arr){
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

const funKiller = ['blue shell', 'green shell', 'red shell', 'blue shell','blue shell','blue shell','blue shell',]

console.log(killJoy(funKiller));