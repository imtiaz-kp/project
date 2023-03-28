import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './locations/locations.component';
import { AllturfComponent } from './allturf/allturf.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
 
const appRoute: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'locations',component:LocationsComponent},
  {path:'allturf',component:AllturfComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'contact',component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LocationsComponent,
    AllturfComponent,
    LoginComponent,
    RegistrationComponent,
    ContactComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoute),
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
