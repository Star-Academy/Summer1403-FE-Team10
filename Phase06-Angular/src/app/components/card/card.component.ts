import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RandomNumberPipe } from '../../pipes/random-number.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RandomNumberPipe],
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

interface Book {
  id: number;
  name: string;
  image: string;
  genre: string[];
  author: string;
  publishData: string;
  price: number;
}
