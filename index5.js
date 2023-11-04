// Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) 
console.log(fixedTwenty) 
//why is this not working?
// a) Explain why the above code returns the wrong answer
    // The console is concatinating the 2 values together not adding them. 
    // And the toFix method is just placing the decimal 2 decimal places from the whole number

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
    const Bob = float1 + float2;
    console.log(Bob.toFixed(2))
}

currencyAddition(0.2,0.1)

// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and return
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

function currencyOperation(float1, float2, operation) {
    switch(operation) {
        case "+":
            return float1 + float2;
        case "-":
            return float1 - float2;
        case "*":
            return float1 * float2;
        case "/":
            return float1 / float2;
        default:
            console.log("Invalid operation");
            return null;
    }
}

const result = currencyOperation(1, 2, "+");
console.log(result);

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:

function currencyOperation(float1, float2, operation,numDecimals) {

    if  (numDecimals < 1 || numDecimals > 10) {
        console.log("To many decimals");
        return null;
    }

    switch(operation) {
        case "+":
            return (float1 + float2).toFixed(numDecimals);
        case "-":
            return (float1 - float2).toFixed(numDecimals);
        case "*":
            return (float1 * float2).toFixed(numDecimals);
        case "/":
            return (float1 / float2).toFixed(numDecimals);
        default:
            console.log("Invalid operation");
            return null;
    }

}

const result2 = currencyOperation(1.003, 2.34, "*",4);
console.log(result2);

const result3 = currencyOperation(10, 3, "/", 1);
console.log(result3);

const result4 = currencyOperation(5, 3, "+", 11); 
