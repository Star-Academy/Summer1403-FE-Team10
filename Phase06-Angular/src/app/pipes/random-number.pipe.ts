import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNumber',
  standalone: true,
})
export class RandomNumberPipe implements PipeTransform {
  transform(value: number, max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
