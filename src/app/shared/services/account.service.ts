import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from '../defined/login.define';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  public login(code: string | number, password: string | number) {
    return this.httpClient.post(`${HOST}/api/login`, { code, password });
  }
}
