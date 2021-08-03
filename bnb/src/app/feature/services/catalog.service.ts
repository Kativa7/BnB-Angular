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

  getListingById(id: string):Observable<Listing>{
    return this.http.get<Listing>(URL + `/${id}`);
  }

  addListing(data: {title: string; location: string; img: string; price: number; category: string; description: string;}){
    return this.http.post<Listing>(URL, data, { withCredentials: false});
  }

  searchListing(query: string){
    return this.http.get<Array<Listing>>(URL+ `?search=${query}`)
  }
}
