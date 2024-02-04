import { Injectable } from "@angular/core";
import { BaseApi } from "../base.api";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DrinksApi extends BaseApi {

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  protected entity: string = '/drinks'
}
