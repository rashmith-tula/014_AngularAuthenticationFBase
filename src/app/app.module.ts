import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { AppRouter } from './approuter.module';
import { HomeComponent } from './home/home.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { authService } from './auth/auth.service';
import { authGuard } from './auth/authGuard.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    HomeComponent,
    WildCardComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule
  ],
  providers: [authService, authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
