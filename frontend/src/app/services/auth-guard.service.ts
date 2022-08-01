import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private _authService: AuthService,
    private _tokenService: TokenService,
    private _router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this._tokenService.getRefreshToken()) {
      return true;
    }

    this._authService.redirectUrl = url;

    this._router.navigate(['/login']).then(_ => false);
    return false;
  }
}
