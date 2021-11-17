import items from "./data/items.js";
import books from "./data/books.js";
import showBooks from "./modules/showBooks.js";
import sortBooks from "./modules/sortBooks.js";

require('bootstrap');

// consoleItems(items);

sortBooks(books);
showBooks(books);