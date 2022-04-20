import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartPageComponent} from "./start-page/start-page.component";
import {OverviewComponent} from "./main-page/overview/overview.component";
import {MainPageModule} from "./main-page/main-page.module";
import {StartPageModule} from "./start-page/start-page.module";


export const ROUTES: Routes = [
  {
    path: '**', loadChildren: () => import ('./start-page/start-page.module')
      .then(module => module.StartPageModule), pathMatch: 'full'
  },
  {
    path: 'overview', loadChildren: () => import ('./main-page/main-page.module')
      .then(module => module.MainPageModule)
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    HttpClientModule,
    MainPageModule,
    StartPageModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
