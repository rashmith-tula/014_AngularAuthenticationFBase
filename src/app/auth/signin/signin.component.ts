import { Component, OnInit, OnDestroy } from '@angular/core';
import { authService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit, OnDestroy {
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

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signIn(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
