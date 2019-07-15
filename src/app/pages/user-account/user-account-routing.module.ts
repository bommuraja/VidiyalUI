import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account.component';
import { UserAccountListComponent } from './user-account-list/user-account-list.component';
import { UserAccountAddComponent} from './user-account-add/user-account-add.component';
import {UserAccountEditComponent} from './user-account-edit/user-account-edit.component';
import {UserAccountViewComponent} from './user-account-view/user-account-view.component';
import {UserAccountDeleteComponent}from './user-account-delete/user-account-delete.component';


  const routes: Routes = [
    {
        path: '',
        component: UserAccountComponent
    }
  ];
  
  

const routes1: Routes = [
  {
      path: '',
      component: UserAccountComponent,
      children:[
        { path:'',redirectTo:'user-account'},
        { path:'user-account-list',component:UserAccountListComponent},
        { path:'user-account-add',component:UserAccountAddComponent},
        { path:'user-account-edit/:id',component:UserAccountEditComponent},
        { path:'user-account-view/:id',component:UserAccountViewComponent},
        { path:'user-account-delete/:id',component:UserAccountDeleteComponent},
        { path:'user-account', component: UserAccountListComponent}
      ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes1)],
    exports: [RouterModule]
})

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserAccountRoutingModule { }