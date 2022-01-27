import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'entries',
        pathMatch: 'full'
      },
      {
        path: "entries",
        loadChildren:
          () => import('./entries/entries.module').then(m => m.EntriesModule)
      }]
  },
];
