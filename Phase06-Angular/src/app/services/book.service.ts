import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.booksUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.booksUrl}/${id}`);
  }
}
