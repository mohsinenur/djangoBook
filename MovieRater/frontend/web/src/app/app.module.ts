import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// route module
import { Routes, RouterModule } from "@angular/router";
// another component module
import { AuthModule } from "./auth/auth.module";
import { MainModule } from "./main/main.module";

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from "angular-font-awesome";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
