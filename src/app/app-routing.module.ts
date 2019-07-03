import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'index', component: IndexComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
