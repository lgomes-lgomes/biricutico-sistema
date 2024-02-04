import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialog } from '../dialogs/filter-dialog/filter-dialog';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';


@Component({
  selector: 'app-filter',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent {
  constructor(
    public dialog: Dialog
  ) {}

  public filters = [];

  public onFilterClick() {
    const dialogRef = this.dialog.open(FilterDialog, {
      minWidth: '400px',
      data: {
        filters: [
          {
            title: 'Bebidas',
            values: [
              {
                label: 'Gin',
                value: 'gin',
                selected: false,
              },
              {
                label: 'Vodca',
                value: 'vodca',
                selected: false,
              },
              {
                label: 'Whiskey',
                value: 'whiskey',
                selected: false,
              },
              {
                label: 'Rum',
                value: 'rum',
                selected: false,
              },
            ]
          },
          {
            title: 'Frutas',
            values: [
              {
                label: 'Morango',
                value: 'morango',
                selected: false,
              },
              {
                label: 'Abacaxi',
                value: 'abacaxi',
                selected: false,
              },
              {
                label: 'Maracujá',
                value: 'maracuja',
                selected: false,
              },
              {
                label: 'Limão',
                value: 'limao',
                selected: false,
              },
            ]
          }
        ],
      },
    });

    dialogRef.closed.subscribe(result => {
      console.log(result);

    });
  }
}
