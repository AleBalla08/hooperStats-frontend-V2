import { Routes } from '@angular/router';
import { WorkoutsComponent } from './components/workouts/workouts-comp/workouts.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'treinos',
    loadComponent: () =>
      import('./components/workouts/workouts-comp/workouts.component')
        .then((m) => m.WorkoutsComponent),
  },
  {
    path: 'treinos/gerenciar',
    loadComponent: () =>
      import('./components/workouts/manage-workouts/manage-workouts.component')
        .then((m) => m.ManageWorkoutsComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
