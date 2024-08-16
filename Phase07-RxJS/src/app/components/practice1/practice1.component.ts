import { Component } from '@angular/core';
import { Practice1Service } from '../../services/practice1.service';

@Component({
  selector: 'app-practice1',
  standalone: true,
  imports: [],
  templateUrl: './practice1.component.html',
  styleUrl: './practice1.component.scss',
})
export class Practice1Component {
  constructor(private Practice1Service: Practice1Service) {}

  ngOnInit(): void {
    const observer = {
      next: (value: number) => console.log(`Received: ${value}`),
      error: (err: any) => console.error(`Error: ${err}`),
      complete: () => console.log('Complete!'),
    };

    this.Practice1Service.getNumbers().subscribe(observer);
  }
}
