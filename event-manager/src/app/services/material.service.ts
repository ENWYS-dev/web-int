import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Session } from '../dtos/auth/session';
import { Observable } from 'rxjs';
import cfg from '../config.json';
import { MaterialList } from '../dtos/material/list';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private url = cfg.domain.api + 'evm/material';
  
  private httpOptions = {
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  list(page: number = 0, limit: number = 0, search: string = '', order: string = '', orderDirection: string = '') : Observable<MaterialList[]> {
    var parameterList: Array<String> = [];

    if(page) {
      parameterList.push("page=" + page);
    }
    if(limit) {
      parameterList.push("limit=" + limit);
    }
    if(search) {
      parameterList.push("q=" + search);
    }
    if(order) {
      parameterList.push("order=" + order);
    }
    if(orderDirection) {
      parameterList.push("order_direction=" + orderDirection);
    }

    var parameter = "?" + parameterList.join('&');
    return this.httpClient.get<MaterialList[]>(this.url + '/list' + parameter, this.httpOptions);
  }
}
