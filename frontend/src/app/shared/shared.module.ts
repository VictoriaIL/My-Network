import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HeaderComponent} from "./components/header/header.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


const commonModules = [
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatCardModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  FormsModule,
  MatTabsModule,
  MatButtonModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatOptionModule,
  MatSelectModule,
]

@NgModule({
  declarations: [
  ],
  exports: [
    ...commonModules,

  ],
  imports: [
    ...commonModules,
  ]
})
export class SharedModule {
}
