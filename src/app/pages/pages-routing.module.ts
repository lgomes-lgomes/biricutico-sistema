import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DrinksGridPageComponent } from './drinks-grid-page/drinks-grid-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: "home",
        component: DrinksGridPageComponent
      },
      {
        path: 'test',
        component: TestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
