import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Session } from './dtos/auth/session';
import { ActivatedRoute } from '@angular/router';
import cfg from './config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'event-manager';

  public loggedIn = false;

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
  ){}

  ngOnInit() {
    this.checkUserLogin();
  }

  checkUserLogin() {
    this.authService.session('data').subscribe(
      (sessionRequest: Session) => {
        this.authService.setLocalSession(sessionRequest);
        if(sessionRequest.loggedIn) {
          this.loggedIn = true;
        } else {
          this.router.data.subscribe(
            data => {
              if(!data["public"]) {
                window.location.href = cfg.domain.auth;
              }
            }
          );
        }

      }
    )
  }
}
