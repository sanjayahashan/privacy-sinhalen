import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { PrivacyStatementsComponent } from './privacy-statements/privacy-statements.component';
import { ForumComponent } from './forum/forum.component';
import { RepliesComponent } from './forum/replies/replies.component';
import { RequestComponent } from './request/request.component';
import { ViewComponent } from './request/view/view.component';
import { YouTubeComponent } from './you-tube/you-tube.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component:HomeComponent},
    { path: 'index', component: IndexComponent },
    { path:'privacystatements', component: PrivacyStatementsComponent },
    { path:'forum', component: ForumComponent },
    { path:'comments/:id', component: RepliesComponent },
    { path:'requests', component:RequestComponent },
    { path: 'requests/view', component:ViewComponent },
    { path:'index2', component:YouTubeComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
