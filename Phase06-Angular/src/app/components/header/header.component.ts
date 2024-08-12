import { Component } from '@angular/core';
import { ShadowBoxDirective } from '../../directives/shadow-box.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ShadowBoxDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
