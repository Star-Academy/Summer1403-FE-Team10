import { Routes } from '@angular/router';
import { Practice1Component } from './components/practice1/practice1.component';
import { Practice2Component } from './components/practice2/practice2.component';
import { Practice3Component } from './components/practice3/practice3.component';
import { Practice4Component } from './components/practice4/practice4.component';

export const routes: Routes = [
  {
    path: 'practice1',
    component: Practice1Component,
  },
  {
    path: 'practice2',
    component: Practice2Component,
  },
  {
    path: 'practice3',
    component: Practice3Component,
  },
  {
    path: 'practice4',
    component: Practice4Component,
  },
];
