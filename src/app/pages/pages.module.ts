import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { DrinksGridPageComponent } from './drinks-grid-page/drinks-grid-page.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    PagesComponent,
    DrinksGridPageComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
  ]
})
export class PagesModule { }
