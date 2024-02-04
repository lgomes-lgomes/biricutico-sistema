import { Component } from '@angular/core';
import { DrinkGridService } from 'src/app/services/drink-grid.service';

@Component({
  selector: 'app-drinks-grid-page',
  templateUrl: './drinks-grid-page.component.html',
  styleUrls: ['./drinks-grid-page.component.scss']
})
export class DrinksGridPageComponent {
  constructor(
    public drinksGridService: DrinkGridService,
  ) {}
}
