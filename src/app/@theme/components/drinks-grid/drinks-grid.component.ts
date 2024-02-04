import { Component, Input, OnInit } from '@angular/core';
import { IDrink } from '../../common/\'/IDrink';
import { DrinksApi } from 'src/app/@core/api/v1/drinks.api';

@Component({
  selector: 'app-drinks-grid',
  templateUrl: './drinks-grid.component.html',
  styleUrls: ['./drinks-grid.component.scss']
})
export class DrinksGridComponent implements OnInit {

  constructor(
    public api: DrinksApi,
  ) {}

  ngOnInit(): void {
    this.setGridSource();
  }
  public drinks: IDrink[] = [];

  private async setGridSource() {

    // this.drinks = await this.api.get();

    this.drinks = [
      {
        name: 'teste',
        favourite: true,
      },
      {
        name: 'teste',
        favourite: true,
      },
      {
        name: 'teste',
        favourite: true,
      },
      {
        name: 'teste',
        favourite: true,
      },
    ]
  }
}
