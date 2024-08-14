import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class ModalStateService {
  private isAddModalOpenSubject = new BehaviorSubject<boolean>(false);
  isAddModalOpen$: Observable<boolean> =
    this.isAddModalOpenSubject.asObservable();

  private isUpdateModalOpenSubject = new BehaviorSubject<boolean>(false);
  private selectedBookSubject = new BehaviorSubject<Book | null>(null);

  isUpdateModalOpen$: Observable<boolean> =
    this.isUpdateModalOpenSubject.asObservable();
  selectedBook$: Observable<Book | null> =
    this.selectedBookSubject.asObservable();

  openAddModal(): void {
    this.isAddModalOpenSubject.next(true);
  }

  closeAddModal(): void {
    this.isAddModalOpenSubject.next(false);
  }

  openUpdateModal(book: Book): void {
    this.selectedBookSubject.next(book);
    this.isUpdateModalOpenSubject.next(true);
  }

  closeUpdateModal(): void {
    this.isUpdateModalOpenSubject.next(false);
    this.selectedBookSubject.next(null);
  }
}
