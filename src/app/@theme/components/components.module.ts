import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkCardComponent } from './drink-card/drink-card.component';
import {MatIconModule} from '@angular/material/icon';
import { DrinksGridComponent } from './drinks-grid/drinks-grid.component';



@NgModule({
  declarations: [
    DrinkCardComponent,
    DrinksGridComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    DrinkCardComponent,
    DrinksGridComponent,
  ]
})
export class ComponentsModule { }
