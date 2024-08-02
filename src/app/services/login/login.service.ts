import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TokenStoreService } from '../token-store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor (private _api: ApiService, private _token: TokenStoreService ) {}

}

