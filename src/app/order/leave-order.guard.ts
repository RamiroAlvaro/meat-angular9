import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderComponent } from './order.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(
    component: OrderComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!component.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?');
    }else{
      return true;
    }
  }

}
