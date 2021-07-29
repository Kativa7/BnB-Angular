import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Listing from 'src/app/models/Listing';

const URL = 'http://localhost:5000/data/catalog'

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Listing>>{
   return this.http.get<Array<Listing>>(URL);
  }
}
