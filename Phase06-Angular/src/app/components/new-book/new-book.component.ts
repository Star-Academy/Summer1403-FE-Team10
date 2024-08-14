import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss',
})
export class NewBookComponent {
  newBook: Book = {
    id: 0,
    name: '',
    image: 'https://picsum.photos/200/300',
    genre: [],
    author: '',
    publishData: '',
    price: 0,
  };
  genreString = '';

  constructor(private bookService: BookService) {}

  onSubmit() {
    this.newBook.genre = this.genreString.split(', ');
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.resetNewBook();
    });
  }

  resetNewBook(): void {
    this.newBook = {
      id: 0,
      name: '',
      image: '',
      genre: [],
      author: '',
      publishData: '',
      price: 0,
    };
  }
}
