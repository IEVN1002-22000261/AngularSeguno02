import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.routes')
  },
  {
    path:'forumlarios',
    loadChildren:()=>import('./formularios/formularios.routes')
  },
  {
    path:'utl',
    loadChildren:()=>import('./utl/utl.routes')
  },
];
