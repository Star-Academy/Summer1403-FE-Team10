"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = void 0;
exports.fetchBooks = fetchBooks;
exports.createCard = createCard;
exports.dataBinding = dataBinding;
exports.main = main;
exports.URL = 'http://127.0.0.1:5500/Phase05-TypeScript/assets/books.json';
var article = document.getElementsByTagName('article')[0];
function fetchBooks(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, books;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    books = _a.sent();
                    return [2 /*return*/, books];
            }
        });
    });
}
function createCard(book) {
    var cardItem = document.createElement('li');
    cardItem.classList.add('cards__item');
    var card = document.createElement('div');
    card.classList.add('card');
    var heroImageContainer = document.createElement('a');
    heroImageContainer.href = '/';
    heroImageContainer.classList.add('card__hero-image-container');
    var heroImage = document.createElement('img');
    heroImage.src = book.image;
    heroImage.alt = book.name;
    heroImage.classList.add('card__hero-image');
    heroImageContainer.appendChild(heroImage);
    card.appendChild(heroImageContainer);
    var mainContent = document.createElement('main');
    mainContent.classList.add('card__content');
    var bookTitle = document.createElement('h1');
    bookTitle.textContent = book.name;
    bookTitle.classList.add('card__title');
    mainContent.appendChild(bookTitle);
    var cardBody = document.createElement('div');
    cardBody.classList.add('card__body');
    var bookGenre = document.createElement('p');
    bookGenre.textContent = "Genre: ".concat(book.genre.join(', '));
    bookGenre.classList.add('card__genre');
    cardBody.appendChild(bookGenre);
    var cardDetails = document.createElement('div');
    cardDetails.classList.add('card__details');
    var cardPrice = document.createElement('div');
    cardPrice.classList.add('card__price');
    var priceIcon = document.createElement('img');
    priceIcon.src = './assets/money.png';
    priceIcon.alt = 'Money';
    priceIcon.classList.add('card__price-icon');
    cardPrice.appendChild(priceIcon);
    var priceValue = document.createElement('h2');
    priceValue.textContent = book.price.toString();
    priceValue.classList.add('card__price-value');
    cardPrice.appendChild(priceValue);
    cardDetails.appendChild(cardPrice);
    var cardPublished = document.createElement('div');
    cardPublished.classList.add('card__published');
    var publishedIcon = document.createElement('img');
    publishedIcon.src = 'https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png';
    publishedIcon.alt = 'clock';
    publishedIcon.classList.add('card__published-icon');
    cardPublished.appendChild(publishedIcon);
    var publishedDate = document.createElement('p');
    publishedDate.textContent = book.publishData;
    publishedDate.classList.add('card__published-date');
    cardPublished.appendChild(publishedDate);
    cardDetails.appendChild(cardPublished);
    cardBody.appendChild(cardDetails);
    var cardAttribute = document.createElement('div');
    cardAttribute.classList.add('card__attribute');
    var avatar = document.createElement('img');
    avatar.src = 'https://i.postimg.cc/SQBzNQf1/image-avatar.png';
    avatar.alt = 'avatar';
    avatar.classList.add('card__avatar');
    cardAttribute.appendChild(avatar);
    var cardAuthor = document.createElement('p');
    cardAuthor.classList.add('card__author');
    cardAuthor.innerHTML = "Author: <span class=\"card__author-name\">".concat(book.author, "</span>");
    cardAttribute.appendChild(cardAuthor);
    cardBody.appendChild(cardAttribute);
    mainContent.appendChild(cardBody);
    card.appendChild(mainContent);
    cardItem.appendChild(card);
    return cardItem;
}
function dataBinding(books) {
    var ul = document.createElement('ul');
    ul.classList.add('cards');
    books.forEach(function (book) {
        var cardItem = createCard(book);
        ul.appendChild(cardItem);
    });
    article.appendChild(ul);
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var books, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchBooks(exports.URL)];
                case 1:
                    books = _a.sent();
                    dataBinding(books);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
