import { Routes } from '@angular/router';
import { ShiftFormComponent } from './components/shift-form/shift-form.component';
import { ShiftListComponent } from './components/shift-list/shift-list.component';

export const routes: Routes = [
  { path: 'agendar', component: ShiftFormComponent },
  { path: 'lista', component: ShiftListComponent },
  { path: '', redirectTo: '/agendar', pathMatch: 'full' }
];