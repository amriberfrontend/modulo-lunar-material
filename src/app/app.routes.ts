import { Routes } from '@angular/router';
import { RockForm } from './components/rock-form/rock-form';
import { RockView } from './components/rock-view/rock-view';

export const routes: Routes = [
  {path: 'rock-form', component: RockForm},
  {path: 'rock-view', component: RockView}
];
