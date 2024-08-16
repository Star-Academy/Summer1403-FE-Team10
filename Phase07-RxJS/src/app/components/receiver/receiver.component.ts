import { Component, OnInit } from '@angular/core';
import { Practice4Service } from '../../services/practice4.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss',
})
export class ReceiverComponent implements OnInit {
  receivedMessage: string = '';

  constructor(private Practice4Service: Practice4Service) {}
  ngOnInit(): void {
    this.Practice4Service.data$.subscribe((data) => {
      this.receivedMessage = data;
    });
  }
}
