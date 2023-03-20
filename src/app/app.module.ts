import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CreateCoursesComponent,
    EditCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'create-courses',
        component: CreateCoursesComponent
      },
      {
       path: 'edit-course/:id',
        component: EditCoursesComponent
      }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
