import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { PrivacyStatementsComponent } from './privacy-statements/privacy-statements.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component:HomeComponent},
    { path: 'index', component: IndexComponent },
    { path:'privacystatements', component: PrivacyStatementsComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
