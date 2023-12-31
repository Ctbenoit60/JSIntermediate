// Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.

function getBookTitle(bookId) {
  let book = books.find((books) => books.id === bookId);
  if (book) {
    return book.title;
  } else {
    console.log("Not in our Library");
    return null;
  }
}

// console.log(getBookTitle(2));

// return the title of whatever the bookId is

// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.

function getOldBooks() {
  return books.filter((book) => book.year <= 1950);
}

// console.log(getOldBooks());

// I need to run through each array in the object books. Then return the books that year is <=1950
// is year <= 1950 ? return obj else clg too soon
// pull in the array and modify / return the array in the books function

// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.

function addGenre() {
  return books.map((book) => {
    book.genre = "classic";
    return book;
  });
}

console.log(addGenre());

// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.

// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.
