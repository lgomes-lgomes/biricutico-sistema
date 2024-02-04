import { Component, Inject, OnInit } from "@angular/core";
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { IDrinkFilter } from "src/app/@theme/common/interfaces/IDrinkFIlter";


@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.html',
  styleUrls: ['./filter-dialog.scss'],
})
export class FilterDialog implements OnInit{
  constructor(
    public ref: DialogRef,
    @Inject(DIALOG_DATA) public filters: any
  ) {}

  ngOnInit(): void {
    console.log(this.filters);
  }

  public onFilterItemClick(item: any) {
    item.selected = !item.selected;
  }

  public confirmFiltersClick() {
    let filterItems: any[] = [];

    this.filters.filters.forEach((filter: any) => {
      filter.values.forEach((value: any) => {
        filterItems.push(value)
      });
    });

    const selectedFIlters: IDrinkFilter[] = filterItems.filter((filter) => filter.selected);

    this.ref.close(selectedFIlters)
  }
}

