import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shopping } from './../models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getShoppingItems(): Observable<Shopping> {
    return this.http.get<Shopping>('assets/shoppingitems.json');
  }
}
