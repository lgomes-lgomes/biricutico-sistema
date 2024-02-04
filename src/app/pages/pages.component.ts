import { Router } from '@angular/router';
import { IMenuItem } from '../@theme/commun/intefaces/IMenuItem';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './pages.components.html',
  styleUrls: ['./pages.componet.scss']
})
export class PagesComponent {

  constructor(
    public router: Router
  ){}

  public menuItems: IMenuItem[] = [
    {
      label: "Home",
      icon: "home",
      class: "",
      route: "/home"
    }
  ]

  public menuItemClick(menuItem: IMenuItem){

    this.menuItems.forEach((item) => {
      // item.label === menuItem.label ? menuItem.class = "selected" : item.class = ""
      if(item.label === menuItem.label){
        menuItem.class = "selected"
      }else{
        item.class = ""
      }
    })

    this.router.navigate([menuItem.route])

  }



}
