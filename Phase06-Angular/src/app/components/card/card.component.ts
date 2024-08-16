import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RandomNumberPipe } from '../../pipes/random-number.pipe';
import { DatePipe } from '@angular/common';
import { ShadowBoxDirective } from '../../directives/shadow-box.directive';
import { type Book } from '../../models/book';
import { ModalStateService } from '../../services/modal-state.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RandomNumberPipe, DatePipe, ShadowBoxDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() book!: Book;
  @Output() delete = new EventEmitter<number>();

  constructor(
    public modalStateService: ModalStateService,
    public bookService: BookService
  ) {}

  onUpdate() {
    this.modalStateService.openUpdateModal(this.book);
  }

  onDelete() {
    this.bookService.deleteBook(this.book.id).subscribe();
  }
}
