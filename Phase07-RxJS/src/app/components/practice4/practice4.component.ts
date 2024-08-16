import { Component } from '@angular/core';
import { Practice4Service } from '../../services/practice4.service';
import { FormsModule } from '@angular/forms';
import { ReceiverComponent } from '../receiver/receiver.component';

@Component({
  selector: 'app-practice4',
  standalone: true,
  imports: [FormsModule, ReceiverComponent],
  templateUrl: './practice4.component.html',
  styleUrl: './practice4.component.scss',
})
export class Practice4Component {
  message: string = '';

  constructor(private Practice4Service: Practice4Service) {}

  sendMessage() {
    this.Practice4Service.sendData(this.message);
  }
}
