import { Routes } from '@angular/router';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';

export const routes: Routes = [
  {
    path: 'conatct',
    component: ContactComponentComponent,
  },
  {
    path: 'about',
    component: AboutComponentComponent,
  },
];
