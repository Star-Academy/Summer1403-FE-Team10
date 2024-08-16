import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, catchError, throwError } from 'rxjs';
import { Book } from '../models/book';
import { HotToastService } from '@ngxpert/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'http://localhost:3000/books';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();
  private maxId = 0;

  constructor(
    private http: HttpClient,
    private toast: HotToastService
  ) {}

  getBooks(): void {
    this.http
      .get<Book[]>(this.booksUrl)
      .pipe(
        tap(data => {
          this.booksSubject.next(data);
          this.maxId = this.calculateMaxId(data);
        }),
        catchError(() => {
          this.toast.error('Failed to load books.');
          return throwError(() => new Error('Failed to fetch books.'));
        })
      )
      .subscribe();
  }

  addBook(book: Book): Observable<Book> {
    book.id = ++this.maxId;
    return this.http.post<Book>(this.booksUrl, book).pipe(
      tap(newBook => {
        const currentBooks = this.booksSubject.value;
        this.booksSubject.next([...currentBooks, newBook]);
        this.toast.success('Book added successfully!');
      }),
      catchError(() => {
        this.toast.error('Failed to add book.');
        return throwError(() => new Error('Failed to add book.'));
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
        this.toast.success('Book updated successfully!');
      }),
      catchError(() => {
        this.toast.error('Failed to update book.');
        return throwError(() => new Error('Failed to update book.'));
      })
    );
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.booksUrl}/${id}`).pipe(
      tap(() => {
        const currentBooks = this.booksSubject.value;
        const updatedBooks = currentBooks.filter(book => book.id !== id);
        this.booksSubject.next(updatedBooks);
        this.toast.success('Book deleted successfully!');
      }),
      catchError(() => {
        this.toast.error('Failed to delete book.');
        return throwError(() => new Error('Failed to delete book.'));
      })
    );
  }

  private calculateMaxId(books: Book[]): number {
    return books.reduce((max, book) => (book.id > max ? book.id : max), 0);
  }
}
