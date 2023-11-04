// The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')


// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

const phoneBookDEF = new Map([

        ['Daniel', '7657854448'],
        ['Edith', '9878978898'],
       ['Freddrick', '3456543456']
      ]
) 

for (let contacts of phoneBookDEF.keys()){
    console.log(Array(contacts));
}

for (let phoneNumbers of phoneBookDEF.values()){
    console.log(Array(phoneNumbers));
}


// c) Update the phone number for Caroline

phoneBookABC.set('Caroline', '7705542772')

console.log(phoneBookABC);


// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map

function printPhoneBook(contacts) {
    for (let [name, phoneNumber] of contacts) {
      console.log(`${name}: ${phoneNumber}`);
    }
  }
  
  printPhoneBook(phoneBookABC);
  printPhoneBook(phoneBookDEF);
  


// e) Combine the contents of the two individual Maps into a single phoneBook Map

const phoneBook = new Map(phoneBookABC); 

for (let [name, phoneNumber] of phoneBookDEF) {
  phoneBook.set(name, phoneNumber); 
}

console.log(phoneBook);


// f) Print out the full list of names in the combined phone book

for (let name of phoneBook.keys()) {
    console.log(name);
  }

  