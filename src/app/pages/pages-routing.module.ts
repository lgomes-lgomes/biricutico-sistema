import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkCardComponent } from '../@theme/components/drink-card/drink-card.component';
import { DrinksGridPageComponent } from './drinks-grid-page/drinks-grid-page.component';

const routes: Routes = [
  {
    path: 'teste',
    component: DrinksGridPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
