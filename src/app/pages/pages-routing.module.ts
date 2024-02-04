import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { FilterImputComponent } from '../@theme/components/filter-imput/filter-imput.component';

const routes: Routes = [
  {
    path: 'home',
    component: FilterImputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
