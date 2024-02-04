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
  console.log('favourite');

  let menuItens = [
    {
      label: 'teste',
      icon: 'dhaad',
      class: ''
    }
  ]


  menuItens.forEach((item => {
    if(item.label === 'etste') {
      item.class = 'selected'
    } else {
      item.class = ''

    }
  }))
 }
}
