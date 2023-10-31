// Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.


// part a: reate a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length.
function truncate(str,max) {
    if (str.length>max) {  
        return str.slice(0, max) + "...";  
        } else {  
        return str;  
        }  

}

// b) Write another variant of the truncate function that uses a conditional operator.
function otherTruncate(str,max) {
    if (str.length >= max) {
        return str.slice(0, max) + "...";
    } else {
        return str;
    }
}

function length(string) {
    return string.slice(' ').length;
}

console.log(truncate('This text will be truncated if it is too long', 25))
console.log(otherTruncate('how much wood could a woodchuck chuck', 32));
console.log(length('how much wood could a woodchuck chuck'));
// This text will be truncat...