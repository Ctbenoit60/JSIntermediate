// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

function ucFirstLetters(city) {
    return city.replace(/(^| )./g, x => x.toUpperCase())
}

console.log(ucFirstLetters("los angeles") ) //Los Angeles

// Remember to break down the problem into smaller parts.
// 1.) Create a function
// 2.) Have the function take a string as the parameter
// 3.) Return the string with the first letter of each word capitalized. (edited) 

