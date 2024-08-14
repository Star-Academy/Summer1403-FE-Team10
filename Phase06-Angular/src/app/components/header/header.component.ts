import { Component } from '@angular/core';
import { ShadowBoxDirective } from '../../directives/shadow-box.directive';
import { ToggleModeSwitchComponent } from '../toggle-mode-switch/toggle-mode-switch.component';
import { ModalStateService } from '../../services/modal-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ShadowBoxDirective, ToggleModeSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public modalStateService: ModalStateService) {}
  onAddBook() {
    this.modalStateService.openAddModal();
  }
}
