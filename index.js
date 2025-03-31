function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  // Fetch API data and return the promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert response to JSON
    .then((books) => renderBooks(books)) // Pass data to render function
    .catch((error) => console.error("Error fetching books:", error)); // Error handling
}

function renderBooks(books) {
  const main = document.querySelector("main");

  main.innerHTML = ""; // Clear previous content (if needed)

  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
