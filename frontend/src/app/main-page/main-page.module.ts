import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview.component';
import {EditComponent} from './edit/edit.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

export const ROUTES: Routes = [
  {
    path: '', component: OverviewComponent
  },
  {
    path: 'edit', component: EditComponent
  }
]

@NgModule({
  declarations: [
    OverviewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class MainPageModule {
}
