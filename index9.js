// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all
// salaries

function sumValues(salaries) {
  let sum = 0;

  for (let value in salaries) {
    if (salaries.hasOwnProperty(value)) {
      sum += salaries[value];
    }
  }

  return sum;
}

console.log(sumValues(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the
// person earning the highest salary

function topEarner(salaries) {
  let topSalary = 0;
  let topEarnerName = "";

  for (let name in salaries) {
    if (salaries.hasOwnProperty(name)) {
      if (salaries[name] > topSalary) {
        topSalary = salaries[name];
        topEarnerName = name;
      }
    }
  }

  return topEarnerName;
}

console.log(topEarner(salaries));

