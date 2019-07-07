import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { PrivacyStatementsComponent } from './privacy-statements/privacy-statements.component';
import { ForumComponent } from './forum/forum.component';
import { RepliesComponent } from './forum/replies/replies.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component:HomeComponent},
    { path: 'index', component: IndexComponent },
    { path:'privacystatements', component: PrivacyStatementsComponent },
    { path:'forum', component: ForumComponent },
    { path:'replies/:id', component: RepliesComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
