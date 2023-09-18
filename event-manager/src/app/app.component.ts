import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Session } from './dtos/auth/session';
import cfg from './config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'event-manager';

  public loggedIn = false;
  public loaded = false;
  public sideNavOpen = false;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    this.checkUserLogin();
  }

  checkUserLogin() {
    this.authService.session('data').subscribe(
      async (sessionRequest: Session) => {
        await this.authService.setLocalSession(sessionRequest);
        this.loaded = true;
        if(sessionRequest.loggedIn) {
          this.loggedIn = true;
        } else {
          window.location.href = cfg.domain.auth;
        }

      }
    )
  }

  sideNavToggle(nav: boolean) {
    this.sideNavOpen = nav;
  }
}
