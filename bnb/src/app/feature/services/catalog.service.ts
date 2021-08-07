import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Listing from 'src/app/feature/models/Listing';
import CreateListing from '../models/CreateListing';

const URL = 'http://localhost:5000/data/catalog';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Listing>> {
    return this.http.get<Array<Listing>>(URL);
  }

  getListingById(id: number): Observable<Listing> {
    return this.http.get<Listing>(URL + `/${id}`);
  }

  addListing(data: {
    title: string;
    location: string;
    img: string;
    price: number;
    category: string;
    description: string;
  }) {
    return this.http.post<CreateListing>(URL, data);
  }

  editListing(
    id: number,
    data: {
      title: string;
      location: string;
      img: string;
      price: number;
      category: string;
      description: string;
    }
  ) {
    return this.http.put<CreateListing>(URL + `/${id}`, data);
  }

  deleteListing(id: number) {
    return this.http.delete(URL + `/${id}`);
  }

  getMyListings() {
    return this.http.get<Array<Listing>>(URL);
  }

  bookAListing(id: number) {
    return this.http.get(URL + `/book/${id}`);
  }

}
