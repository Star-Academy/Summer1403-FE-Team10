import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input() book!: Book;
}

interface Book {
  name: string;
  image: string;
  genre: string[];
  author: string;
  publishData: string;
  price: number;
}
