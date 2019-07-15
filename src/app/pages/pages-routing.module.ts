import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';



const routes: Routes = [
  {
      path: '',
      component: PagesComponent,
      children: [

        { path: '', redirectTo: 'customer'},
        { path: 'operator', loadChildren: './operator/operator.module#OperatorModule'},
        { path: 'user-account', loadChildren: './user-account/user-account.module#UserAccountModule'},
        {path: 'account-transaction', loadChildren: './account-transaction/account-transaction.module#AccountTransactionModule'},
        {path: 'cash-payment', loadChildren: './cash-payment/cash-payment.module#CashPaymentModule'},
        {path: 'cash-payment-status', loadChildren: './cash-payment-status/cash-payment-status.module#CashPaymentStatusModule'},
        {path: 'cash-request', loadChildren: './cash-request/cash-request.module#CashRequestModule'},
        {path: 'cash-request-status', loadChildren: './cash-request-status/cash-request-status.module#CashRequestStatusModule'},
        {path: 'financial-institution', loadChildren: './financial-institution/financial-institution.module#FinancialInstitutionModule'},
        {path: 'interest-percentage', loadChildren: './interest-percentage/interest-percentage.module#InterestPercentageModule'},
        {path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
        {path: 'center', loadChildren: './center/center.module#CenterModule'}

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
