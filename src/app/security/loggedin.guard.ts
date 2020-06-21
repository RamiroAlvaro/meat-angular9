import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanLoad {

  constructor(private loginService: LoginService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
     const loggedIn = this.loginService.isLoggedIn();
     if (!loggedIn) {
       this.loginService.handleLogin(`/${route.path}`);
     }
     return loggedIn;
  }
}
