import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../card/card.component";
import { BookService } from "../../services/book.service";

@Component({
  selector: "app-book-list",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./book-list.component.html",
  styleUrl: "./book-list.component.scss",
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }
}

interface Book {
  name: string;
  image: string;
  genre: string[];
  author: string;
  publishData: string;
  price: number;
}
