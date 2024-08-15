import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { ModalStateService } from './services/modal-state.service';
import { CommonModule } from '@angular/common';
import { UpdateBookComponent } from './components/update-book/update-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    BookListComponent,
    NewBookComponent,
    CommonModule,
    UpdateBookComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public modalStateService: ModalStateService) {}
  title = 'Phase06-Angular';
}
