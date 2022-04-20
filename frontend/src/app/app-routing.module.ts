import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import ('./start-page/start-page.module')
      .then(module => module.StartPageModule), pathMatch: 'full'
  },
  {
    path: 'overview', loadChildren: () => import ('./main-page/main-page.module')
      .then(module => module.MainPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
