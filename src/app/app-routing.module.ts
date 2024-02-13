import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { WildCardPageComponent } from './wild-card-page/wild-card-page.component';

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
    path:'**',
    component:WildCardPageComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
