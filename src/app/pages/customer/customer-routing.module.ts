import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent} from './customer-list/customer-list.component';


const routes: Routes = [
  {
      path: '',
      component: CustomerComponent,
      children: [
        { path: '', redirectTo: 'customer'},
        { path: 'customer-list', component: CustomerListComponent},
        { path: 'customer-add/:id/:PageType', component: CustomerAddComponent},
        { path: 'customer', component: CustomerListComponent}
      ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
