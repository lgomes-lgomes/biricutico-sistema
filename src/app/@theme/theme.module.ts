import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


const MODULES = [
  CommonModule,
  ComponentsModule,
  MatIconModule,
  MatInputModule,
]

@NgModule({
  exports: [
    ...MODULES,
  ]
})
export class ThemeModule { }
