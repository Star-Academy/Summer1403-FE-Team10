import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Practice2Service {
  constructor() {}

  getFilteredSquaredNumbers(): Observable<number> {
    return new Observable<number>((observer) => {
      for (let i = 1; i <= 10; i++) {
        observer.next(i);
      }
      observer.complete();
    }).pipe(
      filter((num) => num % 2 === 0),
      map((num) => num ** 2)
    );
  }
}
