import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilterImputComponent } from './filter-imput/filter-imput.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    FilterImputComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,

  ],
  exports: [
    FilterImputComponent,
    CommonModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class ComponentsModule { }
