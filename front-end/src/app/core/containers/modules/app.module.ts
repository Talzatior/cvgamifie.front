import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainingCourseModule } from 'src/app/features/training-course/training-course.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrainingCourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
