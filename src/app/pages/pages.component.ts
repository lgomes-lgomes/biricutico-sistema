import { Router } from '@angular/router';
import { IMenuItem } from '../@theme/common/interfaces/IMenuItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{

  constructor(
    public router: Router
  ){}

  ngOnInit(): void {
    const url = this.router.url.split('/')[2]

    const menuItem = this.menuItems.find((menuItem) => menuItem.route.includes(url))
    this.setSelectedMenuItem(menuItem!);
  }

  public menuItems: IMenuItem[] = [
    {
      label: "Home",
      icon: "home",
      class: "",
      route: "pages/home"
    },
    {
      label: "Teste",
      icon: "search",
      class: "",
      route: "pages/test"
    },
  ]

  public setSelectedMenuItem(menuItem: IMenuItem){

    this.menuItems.forEach((item) => {
      if(item.label === menuItem.label){
        menuItem.class = "selected"
      }else{
        item.class = ""
      }
    })

    this.router.navigate([menuItem.route])

  }



}
