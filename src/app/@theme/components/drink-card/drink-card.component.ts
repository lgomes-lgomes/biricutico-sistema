import { Component, Input } from '@angular/core';
import { IDrink } from '../../common/interfaces/IDrink';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent {

  @Input({required: true})
  public drink!: IDrink;

 public favouriteDrink() {
  this.drink.favourite = !this.drink.favourite;
 }
}
