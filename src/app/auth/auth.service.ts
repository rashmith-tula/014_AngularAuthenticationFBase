import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()

export class authService {
    token: string;
    messageChanged = new Subject();

    constructor(private Router: Router) { }

    signUp(email: string, password: string) {
        this.token = null;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => { this.messageChanged.next(error.message); })
    }

    signIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((tkn) => {
                firebase.auth().currentUser.getIdToken()
                    .then((tkn) => {
                        console.log('token: ' + tkn);
                        this.token = tkn;
                        this.Router.navigate(['/content']);
                    });
            })
            .catch((error) => { 
                console.log(error.message);
                this.messageChanged.next(error.message);
            })
    }

    signOut() {
        firebase.auth().signOut();
        this.token = null;
    }

    isAuthenticated() {
        return this.token != null;
    }
}