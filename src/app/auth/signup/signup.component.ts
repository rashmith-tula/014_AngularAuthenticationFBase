import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../auth.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  message: { text: any, type: string } = { text: '', type: 'E' };
  subscription: Subscription;

  constructor(private auth: authService) { }

  ngOnInit() {
    this.subscription = this.auth.messageChanged
      .subscribe((message) => {
        this.message.text = message['text'];
        this.message.type = message['type'];
      });
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signUp(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
