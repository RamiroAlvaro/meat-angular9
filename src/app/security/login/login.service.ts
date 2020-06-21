import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from 'src/app/app.api';
import { User } from './user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, {email, password}).pipe(
                     tap(user => this.user = user)
    );
  }

  handleLogin(path?: string) {
     this.router.navigate(['/login', path]);
  }
}
