import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilterImputComponent } from './filter-imput/filter-imput.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { DrinkCardComponent } from './drink-card/drink-card.component';
import { DrinksGridComponent } from './drinks-grid/drinks-grid.component';



@NgModule({
  declarations: [
    FilterImputComponent,
    DrinkCardComponent,
    DrinksGridComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    FilterImputComponent,
    CommonModule,
    MatIconModule,
    MatInputModule,
    DrinkCardComponent,
    DrinksGridComponent,
  ]
})
export class ComponentsModule { }
