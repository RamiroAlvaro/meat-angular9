import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {


  constructor(private http: HttpClient) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`).pipe(
      map((obj) => obj),
      catchError(ErrorHandler.handleError)
    );
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`).pipe(
      map((obj) => obj),
      catchError(ErrorHandler.handleError)
    );
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get<any>(`${MEAT_API}/restaurants/${id}/reviews`).pipe(
      map((obj) => obj),
      catchError(ErrorHandler.handleError)
    );
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`).pipe(
      map((obj) => obj),
      catchError(ErrorHandler.handleError)
    );
  }
}
