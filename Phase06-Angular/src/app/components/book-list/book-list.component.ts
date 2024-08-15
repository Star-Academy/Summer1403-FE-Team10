import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BookService } from '../../services/book.service';
import { type Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = {
    id: 0,
    name: '',
    image: '',
    genre: [],
    author: '',
    publishData: '',
    price: 0,
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.books$.subscribe(data => {
      this.books = data;
    });
    this.bookService.getBooks();
  }

  updateBook(book: Book): void {
    this.bookService.updateBook(book).subscribe();
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe();
  }
}
