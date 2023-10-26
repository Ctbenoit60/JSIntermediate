// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

function ucFirstLetters(city) {
    return city.replace(/(^| )./g, x => x.toUpperCase())
}

console.log(ucFirstLetters("los angeles") ) //Los Angeles


/* Using the the replace method with the expression (/(^| )./g) the function is taking
2 arguments -
First one is  (/(^| )./g) - This arguement is setting the boundries for the function that we want the
first caharcter of a string.

Second aregument uses an arrow funciton that takes x and processes each substring*/ 