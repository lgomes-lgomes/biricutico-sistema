import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [
  CommonModule,
  ComponentsModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ]
})
export class ThemeModule { }
