// Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

function camelCase(cssProp) {
  const words = cssProp.split("-");
  console.log(words);
  let string = "";
  words.forEach((word) => {
    console.log(word);
    if (string.length === 0) {
      string = word;
    } else {
      string += word.charAt(0).toUpperCase() + word.substring(1);
    }
  });
  return string;
}

//part a: Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// function camelCase(cssProp) {
//     cssProp = cssProp.split('-')
//     for (let i = 1; i < cssProp.length; i++) {
//         cssProp[i] = cssProp[i][0].toUpperCase() + cssProp[i].slice(1);
//       }
//    return cssProp.join('')
//   }

function mooseCase(cssProp) {
  const corgi = cssProp.split("-");
  // let string ='';
  let dog = "";
  if (corgi.length === 1) {
    return cssProp;
  }
  for (let i = 0; i < corgi.length; i++) {
    if (i === 1) {
      dog = corgi[0] + corgi[i][0].toUpperCase() + corgi[i].substring(1);
    }
    // else if index = 0 then print cssProp
  }
  return dog;
}

console.log(mooseCase("margin-left")); // marginLeft
console.log(mooseCase("background-image")); // backgroundImage
console.log(mooseCase("display")); // display
