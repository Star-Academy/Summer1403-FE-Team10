import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Practice1Service {
  constructor() {}

  getNumbers(): Observable<number> {
    return new Observable<number>((observer) => {
      for (let i = 1; i <= 5; i++) {
        observer.next(i);
      }
      observer.complete();
    });
  }
}
