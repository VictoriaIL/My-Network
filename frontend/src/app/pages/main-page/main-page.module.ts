import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview/overview.component';
import {EditComponent} from './edit/edit.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { NewBookComponent } from './overview/new-book/new-book.component';
import { EditBookComponent } from './overview/edit-book/edit-book.component';
import { BookComponent } from './overview/book/book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import {AppModule} from "../../app.module";
import {SafePipe} from "../../safe.pipe";

export const ROUTES: Routes = [
  {
    path: '', component: OverviewComponent
  },
  {
    path: 'edit', component: EditComponent
  },
  {
    path: 'view', component: ViewBookComponent
  }
]

@NgModule({
  declarations: [
    OverviewComponent,
    EditComponent,
    NewBookComponent,
    EditBookComponent,
    BookComponent,
    ViewBookComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class MainPageModule {
}
