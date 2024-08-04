import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-book-list",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./book-list.component.html",
  styleUrl: "./book-list.component.scss",
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    {
      name: "The Midnight Library",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Fantasy"],
      author: "Matt Haig",
      publishData: "2020-08-13",
      price: 1499,
    },
    {
      name: "Dune",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Frank Herbert",
      publishData: "1965-08-01",
      price: 999,
    },
    {
      name: "To Kill a Mockingbird",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Classic"],
      author: "Harper Lee",
      publishData: "1960-07-11",
      price: 799,
    },
    {
      name: "Dune",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Frank Herbert",
      publishData: "1965-08-01",
      price: 999,
    },
    {
      name: "To Kill a Mockingbird",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Classic"],
      author: "Harper Lee",
      publishData: "1960-07-11",
      price: 799,
    },
    {
      name: "Dune",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Frank Herbert",
      publishData: "1965-08-01",
      price: 999,
    },
    {
      name: "To Kill a Mockingbird",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Classic"],
      author: "Harper Lee",
      publishData: "1960-07-11",
      price: 799,
    },
    {
      name: "Dune",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Frank Herbert",
      publishData: "1965-08-01",
      price: 999,
    },
    {
      name: "To Kill a Mockingbird",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Classic"],
      author: "Harper Lee",
      publishData: "1960-07-11",
      price: 799,
    },
    {
      name: "Dune",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Frank Herbert",
      publishData: "1965-08-01",
      price: 999,
    },
    {
      name: "To Kill a Mockingbird",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Classic"],
      author: "Harper Lee",
      publishData: "1960-07-11",
      price: 799,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface Book {
  name: string;
  image: string;
  genre: string[];
  author: string;
  publishData: string;
  price: number;
}
