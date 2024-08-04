import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../card/card.component";
import { BookService } from "../../services/book.service";

@Component({
  selector: "app-book-list",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./book-list.component.html",
  styleUrl: "./book-list.component.scss",
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = {
    id: 0,
    name: "",
    image: "",
    genre: [],
    author: "",
    publishData: "",
    price: 0,
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe((book) => {
      this.books.push(book);
      this.resetNewBook();
    });
  }

  updateBook(book: Book): void {
    this.bookService.updateBook(book).subscribe((updatedBook) => {
      const index = this.books.findIndex((b) => b.id === updatedBook.id);
      if (index !== -1) {
        this.books[index] = updatedBook;
      }
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter((book) => book.id !== id);
    });
  }

  resetNewBook(): void {
    this.newBook = {
      id: 0,
      name: "",
      image: "",
      genre: [],
      author: "",
      publishData: "",
      price: 0,
    };
  }
}

interface Book {
  id: number;
  name: string;
  image: string;
  genre: string[];
  author: string;
  publishData: string;
  price: number;
}
