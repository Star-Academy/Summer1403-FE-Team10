import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Practice3Service {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getData(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(this.apiUrl)
      .pipe(map((data) => data.slice(0, 10)));
  }
}

export interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}
