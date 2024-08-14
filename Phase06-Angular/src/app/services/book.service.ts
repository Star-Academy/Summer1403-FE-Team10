import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { type Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'http://localhost:3000/books';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();
  private maxId = 0;

  constructor(private http: HttpClient) {}

  getBooks(): void {
    this.http.get<Book[]>(this.booksUrl).subscribe(data => {
      this.booksSubject.next(data);
      this.maxId = this.calculateMaxId(data);
    });
  }

  addBook(book: Book): Observable<Book> {
    book.id = ++this.maxId;
    return this.http.post<Book>(this.booksUrl, book).pipe(
      tap(newBook => {
        const currentBooks = this.booksSubject.value;
        this.booksSubject.next([...currentBooks, newBook]);
      })
    );
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.booksUrl}/${book.id}`, book).pipe(
      tap(updatedBook => {
        const currentBooks = this.booksSubject.value;
        const updatedBooks = currentBooks.map(b =>
          b.id === updatedBook.id ? updatedBook : b
        );
        this.booksSubject.next(updatedBooks);
      })
    );
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.booksUrl}/${id}`).pipe(
      tap(() => {
        const currentBooks = this.booksSubject.value;
        const updatedBooks = currentBooks.filter(book => book.id !== id);
        this.booksSubject.next(updatedBooks);
      })
    );
  }

  private calculateMaxId(books: Book[]): number {
    return books.reduce((max, book) => (book.id > max ? book.id : max), 0);
  }
}
