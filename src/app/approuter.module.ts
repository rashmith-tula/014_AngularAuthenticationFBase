import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { authGuard } from './auth/authGuard.service';

const appRoutes : Routes = [
 {path : '', component : HomeComponent},
 {path : 'signup', component : SignupComponent},
 {path : 'signin', component : SigninComponent},
 {path : 'content', component : ContentComponent, canActivate: [authGuard] },
 {path : '**', component : WildCardComponent}
]

@NgModule({
 imports: [
   RouterModule.forRoot(appRoutes)  
 ],
 exports: [
   RouterModule  
 ]
})

export class AppRouter {}