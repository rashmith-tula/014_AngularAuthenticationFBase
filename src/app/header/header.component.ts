import { Component, OnInit } from '@angular/core';
import { authService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: authService,
              private Router: Router) { }

  ngOnInit() {
  }

  onSignout() {
   this.auth.signOut();
   this.Router.navigate(['/']);
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }

}
