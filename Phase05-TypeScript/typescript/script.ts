import { type Book } from '../../Phase06-Angular/src/app/models/book';
export const URL: string =
  'http://127.0.0.1:5500/Phase05-TypeScript/assets/books.json';
const article: HTMLElement = document.getElementsByTagName('article')[0];

export async function fetchBooks(url: string): Promise<Book[]> {
  const response = await fetch(url);
  const books: Book[] = await response.json();
  return books;
}

export function createCard(book: Book): HTMLLIElement {
  const cardItem: HTMLLIElement = document.createElement('li');
  cardItem.classList.add('cards__item');

  const card: HTMLDivElement = document.createElement('div');
  card.classList.add('card');

  const heroImageContainer: HTMLAnchorElement = document.createElement('a');
  heroImageContainer.href = '/';
  heroImageContainer.classList.add('card__hero-image-container');

  const heroImage: HTMLImageElement = document.createElement('img');
  heroImage.src = book.image;
  heroImage.alt = book.name;
  heroImage.classList.add('card__hero-image');

  heroImageContainer.appendChild(heroImage);
  card.appendChild(heroImageContainer);

  const mainContent: HTMLElement = document.createElement('main');
  mainContent.classList.add('card__content');

  const bookTitle: HTMLHeadingElement = document.createElement('h1');
  bookTitle.textContent = book.name;
  bookTitle.classList.add('card__title');
  mainContent.appendChild(bookTitle);

  const cardBody: HTMLDivElement = document.createElement('div');
  cardBody.classList.add('card__body');

  const bookGenre: HTMLParagraphElement = document.createElement('p');
  bookGenre.textContent = `Genre: ${book.genre.join(', ')}`;
  bookGenre.classList.add('card__genre');
  cardBody.appendChild(bookGenre);

  const cardDetails: HTMLDivElement = document.createElement('div');
  cardDetails.classList.add('card__details');

  const cardPrice: HTMLDivElement = document.createElement('div');
  cardPrice.classList.add('card__price');

  const priceIcon: HTMLImageElement = document.createElement('img');
  priceIcon.src = './assets/money.png';
  priceIcon.alt = 'Money';
  priceIcon.classList.add('card__price-icon');
  cardPrice.appendChild(priceIcon);

  const priceValue: HTMLHeadingElement = document.createElement('h2');
  priceValue.textContent = book.price.toString();
  priceValue.classList.add('card__price-value');
  cardPrice.appendChild(priceValue);

  cardDetails.appendChild(cardPrice);

  const cardPublished: HTMLDivElement = document.createElement('div');
  cardPublished.classList.add('card__published');

  const publishedIcon: HTMLImageElement = document.createElement('img');
  publishedIcon.src = 'https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png';
  publishedIcon.alt = 'clock';
  publishedIcon.classList.add('card__published-icon');
  cardPublished.appendChild(publishedIcon);

  const publishedDate: HTMLParagraphElement = document.createElement('p');
  publishedDate.textContent = book.publishData;
  publishedDate.classList.add('card__published-date');
  cardPublished.appendChild(publishedDate);

  cardDetails.appendChild(cardPublished);
  cardBody.appendChild(cardDetails);

  const cardAttribute: HTMLDivElement = document.createElement('div');
  cardAttribute.classList.add('card__attribute');

  const avatar: HTMLImageElement = document.createElement('img');
  avatar.src = 'https://i.postimg.cc/SQBzNQf1/image-avatar.png';
  avatar.alt = 'avatar';
  avatar.classList.add('card__avatar');
  cardAttribute.appendChild(avatar);

  const cardAuthor: HTMLParagraphElement = document.createElement('p');
  cardAuthor.classList.add('card__author');
  cardAuthor.innerHTML = `Author: <span class="card__author-name">${book.author}</span>`;
  cardAttribute.appendChild(cardAuthor);

  cardBody.appendChild(cardAttribute);
  mainContent.appendChild(cardBody);
  card.appendChild(mainContent);

  cardItem.appendChild(card);

  return cardItem;
}

export function dataBinding(books: Book[]): void {
  const ul: HTMLUListElement = document.createElement('ul');
  ul.classList.add('cards');

  books.forEach((book: Book) => {
    const cardItem: HTMLLIElement = createCard(book);
    ul.appendChild(cardItem);
  });

  article.appendChild(ul);
}

export async function main(): Promise<void> {
  try {
    const books: Book[] = await fetchBooks(URL);
    dataBinding(books);
  } catch (error) {
    console.error(error);
  }
}

main();
