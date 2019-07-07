import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PrivacyStatementsComponent } from './privacy-statements/privacy-statements.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ForumComponent } from './forum/forum.component';
import { RepliesComponent } from './forum/replies/replies.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var config = {
  apiKey: "AIzaSyCEPw5mgf8FSQqfKhQxq1jgcpgIU3h60xI",
  authDomain: "privacy-sinhalen.firebaseapp.com",
  databaseURL: "https://privacy-sinhalen.firebaseio.com",
  projectId: "privacy-sinhalen",
  storageBucket: "",
  messagingSenderId: "335824663948",
  appId: "1:335824663948:web:fd7c72aae598f78d"
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    PrivacyStatementsComponent,
    ForumComponent,
    RepliesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
