import { Component, OnInit, Input } from '@angular/core';
import cfg from '../../../config.json'

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

  @Input() appComponen: any = <any>{};

  public links = {
    'logout': cfg.domain.auth + 'logout'
  }

  public navProfileSettings = false;
  public session = {
    "username": localStorage.getItem("username"),
    "firstname": localStorage.getItem("firstname"),
    "lastname": localStorage.getItem("lastname")
  }

  ngOnInit() {
  }

  toggleProfile() {
    if(this.navProfileSettings) {
      this.navProfileSettings = false
    } else {
      
      this.navProfileSettings = true
    }
  }
}