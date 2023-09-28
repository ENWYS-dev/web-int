import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redirect } from 'src/app/dtos/redirect';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private route: Router,
    private router: ActivatedRoute
  ) {}


  ngOnInit() {
    this.router.queryParams.subscribe(
      parameter => {
        console.log(parameter)
        this.authService.redirect(parameter["link"]).subscribe(
          (redirect: any) => {
            window.location.href = redirect.url;
          }
            
        )
      }
    )
  }
}
