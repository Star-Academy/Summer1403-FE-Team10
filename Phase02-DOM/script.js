// const URL =
// 'https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json';
const URL = 'http://127.0.0.1:5500/Phase02/books.json';
const article = document.getElementsByTagName('article')[0];

async function fetchBooks(url) {
  const response = await fetch(url);
  const books = await response.json();
  console.log(books);
  return books;
}

function dataBinding(books) {
  books.forEach((book) => {
    const articleDiv = document.createElement('div');

    const bookImage = document.createElement('img');
    bookImage.src = book.image;

    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.name;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;

    articleDiv.appendChild(bookImage);
    articleDiv.appendChild(bookTitle);
    articleDiv.appendChild(bookAuthor);

    article.appendChild(articleDiv);
  });
}

async function main() {
  try {
    const books = await fetchBooks(URL);
    dataBinding(books);
  } catch (error) {
    console.log(error);
  }
}

main();
