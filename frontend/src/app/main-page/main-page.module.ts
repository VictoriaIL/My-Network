import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview.component';
import {EditComponent} from './edit/edit.component';
import {RouterModule, Routes} from "@angular/router";

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
    RouterModule.forChild(ROUTES)
  ]
})
export class MainPageModule {
}
