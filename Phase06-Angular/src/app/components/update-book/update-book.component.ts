import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ModalStateService } from '../../services/modal-state.service';
import { Book } from '../../models/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent implements OnInit, OnDestroy {
  book: Book | null = null;
  genreString = '';
  private subscription: Subscription = new Subscription();

  constructor(
    private bookService: BookService,
    public modalStateService: ModalStateService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.modalStateService.selectedBook$.subscribe(book => {
        if (book) {
          this.book = book;
          this.genreString = book.genre.join(', ');
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.book) {
      this.book.genre = this.genreString.split(', ');
      this.bookService.updateBook(this.book).subscribe({
        next: () => {
          this.modalStateService.closeUpdateModal();
          this.resetBook();
        },
      });
    }
  }

  resetBook(): void {
    if (this.book) {
      this.book = { ...this.book };
    }
  }

  onCancelBtnClick() {
    this.modalStateService.closeUpdateModal();
  }
}
