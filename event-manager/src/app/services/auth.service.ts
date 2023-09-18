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
    localStorage.setItem('loggedIn', session.loggedIn? "true":"false");
    localStorage.setItem('loginDate', session.loginDate);
    localStorage.setItem('username', session.username);
    localStorage.setItem('firstname', session.firstname);
    localStorage.setItem('lastname', session.lastname);
    localStorage.setItem('profilePicture', session.profilePicture);
    localStorage.setItem('permissions', JSON.stringify(session.permissions));
  }

  getLocalSession(): Session {
    return {
      loggedIn: this.stringToBoolean(localStorage.getItem("loggedIn") || ''),
      loginDate: localStorage.getItem("loginDate") || '',
      username: localStorage.getItem("username") || '',
      firstname: localStorage.getItem("firstname") || '',
      lastname: localStorage.getItem("lastname") || '',
      profilePicture: localStorage.getItem("profilePicture") || '',
      permissions: JSON.parse(localStorage.getItem("permissions") || '')
    }
  }

  private stringToBoolean(input: string): boolean {
    if(input == "true") {
      return true;
    } else {
      return false;
    }
  }
}
