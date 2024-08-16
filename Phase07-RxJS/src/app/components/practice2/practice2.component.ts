import { Component } from '@angular/core';
import { Practice2Service } from '../../services/practice2.service';

@Component({
  selector: 'app-practice2',
  standalone: true,
  imports: [],
  templateUrl: './practice2.component.html',
  styleUrl: './practice2.component.scss',
})
export class Practice2Component {
  constructor(private Practice2Service: Practice2Service) {}

  ngOnInit(): void {
    this.Practice2Service.getFilteredSquaredNumbers().subscribe((result) => {
      console.log(result);
    });
  }
}
