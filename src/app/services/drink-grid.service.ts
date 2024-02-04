import { Injectable } from "@angular/core";
import { IDrinkFilter } from "../@theme/common/interfaces/IDrinkFIlter";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class DrinkGridService {

  public filter: BehaviorSubject <IDrinkFilter[]>;

  // public filterChange: Subject<IDrinkFilter[]> = new Subject<IDrinkFilter[]>();

  constructor() {
    this.filter = new BehaviorSubject<IDrinkFilter[]>([]);
    // this.filterChange.subscribe((value) => this.filter = value);
  }

  public getValue(): Observable<IDrinkFilter[]> {
    return this.filter.asObservable();
  }

  public onFilterChange(newFilters: IDrinkFilter[]) {
    this.filter.next(newFilters);
  }
}
