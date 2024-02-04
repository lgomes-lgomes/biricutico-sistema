import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterImputComponent } from './filter-imput/filter-imput.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    FilterImputComponent
  ],
  imports: [
    CommonModule,
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
