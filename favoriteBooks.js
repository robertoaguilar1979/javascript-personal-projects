let favoriteBook = function (word) {
  if (!word.includes("rings")) {
    favoriteBookArray.push(word);
  }
};

let printFavoriteBooks = function () {
  console.log(
    `you have: ${favoriteBookArray.length} favorite books and they are: `);

  for (let book of favoriteBookArray) {
    console.log(book);
  }
};

let favoriteBookArray = [];

favoriteBook("lord of the rings");
favoriteBook("lord of the car");
favoriteBook("lord of the rings");
favoriteBook("lord of the house");
favoriteBook("lord of the rings");
favoriteBook("lord of the bed");

printFavoriteBooks();
