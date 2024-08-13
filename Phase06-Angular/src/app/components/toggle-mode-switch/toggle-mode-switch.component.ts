import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-toggle-mode-switch',
  standalone: true,
  imports: [],
  templateUrl: './toggle-mode-switch.component.html',
  styleUrl: './toggle-mode-switch.component.scss',
})
export class ToggleModeSwitchComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
