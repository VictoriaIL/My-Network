import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageModule} from "./main-page/main-page.module";
import {StartPageModule} from "./start-page/start-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainPageModule,
    StartPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
