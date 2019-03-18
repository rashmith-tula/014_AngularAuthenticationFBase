import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../auth.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  message: any = '';

  constructor(private auth: authService) { }

  ngOnInit() {
    this.auth.messageChanged
      .subscribe((message) => { this.message = message; })
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signUp(email, password);
  }

  ngOnDestroy() {
    this.auth.messageChanged.unsubscribe();
  }

}
