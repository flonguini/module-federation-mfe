import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe1/about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'mfe1/home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'mfe1',
    redirectTo: '/mfe1/home',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/mfe1',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];

// { path: 'mfe-angular/child-a', loadComponent: async () => (await import('./child-a/child-a.component')).ChildAComponent },
// { path: 'mfe-angular/child-b', loadComponent: async () => (await import('./child-b/child-b.component')).ChildBComponent },
// { path: 'mfe-angular', redirectTo: '/mfe-angular/child-a', pathMatch: 'full' },
// { path: '', redirectTo: '/mfe-angular', pathMatch: 'full' }
