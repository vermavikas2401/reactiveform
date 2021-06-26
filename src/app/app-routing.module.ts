import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [
  {path: 'create', component: CreateuserComponent},
  {path: 'view', component: ViewusersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
