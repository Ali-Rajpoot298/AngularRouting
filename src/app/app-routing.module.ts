import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
 path :'',
 component:UserComponent
  },
  {
path:'about',
component:AboutComponent,
children:[
  {
    path:'me',
    component:AboutMeComponent
  },
  {
    path:'company',
    component:AboutCompanyComponent
  }
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
