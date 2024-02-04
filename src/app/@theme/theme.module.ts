import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


const MODULES = [
  CommonModule,
  ComponentsModule,
  MatToolbarModule,
  MatIconModule
  MatInputModule,
]

@NgModule({
  exports: [
    ...MODULES,
  ]
})
export class ThemeModule { }
