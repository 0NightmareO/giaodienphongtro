import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TokenStoreService } from '../token-store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private userSubject : BehaviorSubject<any>;
  public user : Observable<any>;

  constructor (private _api: ApiService, private _token: TokenStoreService ) {
    this.userSubject = new BehaviorSubject<any>(this._token.getUser());
    this.user = this.userSubject.asObservable();
  }

  login(credential: any):Observable<any>{
    return this._api.postTypeRequest('login',{
      email: credential.email,
      password : credential.password
    }).pipe(map(
      (response: any) => {
        let user ={
          email: credential.email,
          token: response.token
        };
        this._token.setToken(response.token);
        this._token.setUser(response.data[0]);
        this.userSubject.next(user);;
        return user;
      }
    ));
  }
}

