import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilterInputComponent } from './filter-input/filter-input.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { DrinkCardComponent } from './drink-card/drink-card.component';
import { DrinksGridComponent } from './drinks-grid/drinks-grid.component';
import { FilterDialog } from './dialogs/filter-dialog/filter-dialog';
import {DialogModule} from '@angular/cdk/dialog';

@NgModule({
  declarations: [
    FilterInputComponent,
    DrinkCardComponent,
    DrinksGridComponent,
    FilterDialog
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    DialogModule,
  ],
  exports: [
    FilterInputComponent,
    CommonModule,
    MatIconModule,
    MatInputModule,
    DrinkCardComponent,
    DrinksGridComponent,
    FilterDialog
  ]
})
export class ComponentsModule { }
