import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Session } from '../dtos/auth/session';
import { Observable } from 'rxjs';
import cfg from '../config.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = cfg.domain.api + 'auth';
  
  private httpOptions = {
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  session(type: string = '') : Observable<Session> {
    var typeLink = '';
    if(type) {
      typeLink = '?type=' + type;
    }
    return this.httpClient.get<Session>(this.url + '/session' + typeLink, this.httpOptions);
  }

  setLocalSession(session : Session) {
    localStorage.setItem('username', session.username);
    localStorage.setItem('firstname', session.firstname);
    localStorage.setItem('lastname', session.lastname);
  }
}
