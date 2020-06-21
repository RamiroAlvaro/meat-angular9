import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {


  constructor(private http: HttpClient) { }

  restaurants(search?: string): Observable<Restaurant[]> {
    let httpParams: HttpParams;
    if (search) {
      httpParams = new HttpParams().set('q', search);
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: httpParams});
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get<any>(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}
