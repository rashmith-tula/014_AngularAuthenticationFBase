import { Component, OnInit, OnDestroy } from '@angular/core';
import { authService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit, OnDestroy {
  message: any;
  constructor(private auth: authService) { }

  ngOnInit() {
    this.auth.messageChanged
      .subscribe((message)=> { this.message = message; })
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signIn(email, password);
  }

  ngOnDestroy() {
    this.auth.messageChanged.unsubscribe();
  }

}
