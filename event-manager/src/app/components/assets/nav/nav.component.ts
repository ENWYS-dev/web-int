import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import cfg from '../../../config.json'
import { Session } from 'src/app/dtos/auth/session';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() sideNavOpenStatus = new EventEmitter<boolean>();

  constructor (
    public authService: AuthService
  ) {}

  public links = {
    'logout': cfg.domain.auth + 'logout'
  }

  public navProfileSettings = false;
  public sideNavOpen = false;
  public session: Session = this.authService.getLocalSession();

  ngOnInit() {
  }

  toggleProfile() {
    if(this.navProfileSettings) {
      this.navProfileSettings = false
    } else {
      
      this.navProfileSettings = true
    }
  }

  toggleSideNav() {
    if(this.sideNavOpen) {
      this.sideNavOpen = false
    } else {
      this.sideNavOpen = true
    }

    this.sideNavOpenStatus.emit(this.sideNavOpen)
  }
}
