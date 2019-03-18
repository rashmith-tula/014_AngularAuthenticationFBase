import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'authenticationFBase';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBxUvTU-BMXbks6oB30wpNRbMnnP_EqL2M",
      authDomain: "angular-1-95354.firebaseapp.com"
    });

  }
}
