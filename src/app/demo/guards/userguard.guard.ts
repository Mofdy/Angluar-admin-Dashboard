import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
<<<<<<< HEAD
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
=======
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
>>>>>>> 520680c52791ab31703cd0593b1c25738e849c07

@Injectable({
  providedIn: 'root'
})
export class userguardGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

<<<<<<< HEAD
  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/guest/login']);
          return false;
=======
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('Access denied');
          this.router.navigate(['/login']);
>>>>>>> 520680c52791ab31703cd0593b1c25738e849c07
        }
      })
    );
  }
}
