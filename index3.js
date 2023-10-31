// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
const animals = ['Tiger', 'Giraffe']
console.log(animals)
console.log(animals[0])

//part a: Add 2 new values to the end using the push method
const addAnimals = animals.push('Lion', 'Bears')
console.log(addAnimals)
console.log(animals);

//b) part b: Add 2 new values to the beginning using the unshift method
const addMoreAnimals = animals.unshift('Tin Man', 'Scarecow')
console.log(addMoreAnimals)
console.log(animals);