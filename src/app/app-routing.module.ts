import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
 path :'',
 component:UserComponent
  },
  {
path:'about',
component:AboutComponent
  },
  {
    path:'user/:id',
    component:UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
