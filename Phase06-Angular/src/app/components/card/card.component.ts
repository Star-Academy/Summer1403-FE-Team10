import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RandomNumberPipe } from '../../pipes/random-number.pipe';
import { DatePipe } from '@angular/common';
import { ShadowBoxDirective } from '../../directives/shadow-box.directive';
import { type Book } from '../../models/book';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RandomNumberPipe, DatePipe, ShadowBoxDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() book!: Book;
  @Output() update = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();

  onUpdate() {
    this.update.emit(this.book);
  }

  onDelete() {
    this.delete.emit(this.book.id);
  }
}
