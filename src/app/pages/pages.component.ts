import { Router } from '@angular/router';
import { IMenuItem } from '../@theme/commun/intefaces/IMenuItem';
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

  }

  public menuItems: IMenuItem[] = [
    {
      label: "Home",
      icon: "home",
      class: "",
      route: "pages/home"
    }
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
