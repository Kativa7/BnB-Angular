import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
  ]
})
export class CoreModule { }
