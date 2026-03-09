import { Routes } from '@angular/router';
import { WorkoutsComponent } from './components/workouts/workouts.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'treinos',
    loadComponent: () =>
      import('./components/workouts/workouts.component')
        .then((m) => m.WorkoutsComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
