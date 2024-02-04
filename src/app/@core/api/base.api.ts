import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export class BaseApi {

  constructor(
    protected http: HttpClient
  ) {}

  protected baseUrl: string = 'baseUrl';
  protected entity: string = '';

  public async get<ReturnType>() {
    const url: string = `${this.baseUrl}${this.entity}`

    return await this.http.get<ReturnType>(url).toPromise();
  }


}
