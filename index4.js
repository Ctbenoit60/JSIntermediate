// Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

// function camelCase(cssProp) {
//   cssProp = cssProp.split("-");
//   if (cssProp.length >= 2) {
//     const cssProp2 = cssProp[1];
//     noDash = cssProp2.charAt(0).toUpperCase(1) + cssProp.slice(1);
//   }
//   return console.log(noDash);
// }

//part a: Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
function camelCase(cssProp) {
    cssProp = cssProp.split('-')
    for (let i = 1; i < cssProp.length; i++) {
        cssProp[i] = cssProp[i][0].toUpperCase() + cssProp[i].slice(1);
      }
   return cssProp.join('')
  }
  
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
