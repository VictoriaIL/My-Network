import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageModule} from "./pages/main-page/main-page.module";
import {StartPageModule} from "./pages/start-page/start-page.module";
import {SharedModule} from "./pages/shared/shared.module";
import {HeaderComponent} from "./pages/shared/components/header/header.component";
import {FooterComponent} from "./pages/shared/components/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainPageModule,
    StartPageModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
