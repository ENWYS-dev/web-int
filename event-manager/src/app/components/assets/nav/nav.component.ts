import { Component, OnInit, Input } from '@angular/core';
import cfg from '../../../config.json'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

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
