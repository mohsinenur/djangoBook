import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './main.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ApiService } from '../_service/api.service';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {path: "movies", component: MainComponent}
]

@NgModule({
  declarations: [
    MainComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
