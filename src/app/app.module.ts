import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Contact1Component } from './contact-1/contact-1.component';
import { Contact2Component } from './contact-2/contact-2.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: Contact1Component },
  { path: 'contact/:id', component: Contact2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Contact1Component,
    Contact2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
