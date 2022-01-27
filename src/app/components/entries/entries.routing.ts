import { AddEntryComponent } from './add-entry/add-entry.component';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { Routes } from '@angular/router';

export const EntriesRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddEntryComponent
  },
  {
    path: 'edit/:id',
    component: AddEntryComponent
  },
  {
    path: 'list',
    component: AllEntriesComponent
  }
];
