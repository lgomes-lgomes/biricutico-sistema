import { Component, Input, OnInit } from '@angular/core';
import { IDrink } from '../../common/interfaces/IDrink';
import { DrinksApi } from 'src/app/@core/api/v1/drinks.api';
import { DrinkGridService } from 'src/app/services/drink-grid.service';
import { IDrinkFilter } from '../../common/interfaces/IDrinkFIlter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks-grid',
  templateUrl: './drinks-grid.component.html',
  styleUrls: ['./drinks-grid.component.scss']
})
export class DrinksGridComponent implements OnInit {

  constructor(
    public api: DrinksApi,
    public service: DrinkGridService,
    public router: Router
  ) {}

  public filters: IDrinkFilter[] = []

  ngOnInit(): void {
    this.service.getValue().subscribe((value) => {
      this.filters = value;
      this.setGridSource();
    });
  }
  public drinks: IDrink[] = [];

  private async setGridSource() {

    // this.drinks = await this.api.get();

    console.log(this.filters);

      const drinksSource = [
      {
        name: 'teste',
        favourite: false,
      },
      {
        name: 'teste',
        favourite: true,
      },
      {
        name: 'teste',
        favourite: false,
      },
      {
        name: 'teste',
        favourite: true,
      },
    ]

    const listFavorites = this.filters.find((filter) => filter.value === 'favoritos');



    this.drinks = listFavorites ? drinksSource.filter((drink) => drink.favourite) : drinksSource;
  }
}
