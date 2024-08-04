import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private booksUrl = "assets/books.json";

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
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
