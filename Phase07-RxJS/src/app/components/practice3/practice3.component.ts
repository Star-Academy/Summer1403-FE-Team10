import { Component } from '@angular/core';
import { Practice3Service } from '../../services/practice3.service';

@Component({
  selector: 'app-practice3',
  standalone: true,
  imports: [],
  templateUrl: './practice3.component.html',
  styleUrl: './practice3.component.scss',
})
export class Practice3Component {
  images: any[] = [];

  constructor(private Practice3Service: Practice3Service) {}

  ngOnInit(): void {
    this.Practice3Service.getData().subscribe((response) => {
      this.images = response;
      console.log(response);
    });
  }
}
