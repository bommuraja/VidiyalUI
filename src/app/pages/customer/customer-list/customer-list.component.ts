import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, MatFormField} from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {

  CustomerList: CustomerListData[] = [];

  constructor(public rest: CustomerService, private route: ActivatedRoute, private router: Router) {
    this.CustomerList = [];
    this.rest.getCustomers().subscribe((data: {}) => {
      console.log(data);
      this.CustomerList = data as CustomerListData[];
    });

   }

   ngOnInit() {
    }

    add() {
    this.router.navigate(['pages/customer/customer-add/0/AddPage']);
    
    }

    delete(id) {
    this.rest.deleteCustomer(id)
      .subscribe(res => {
          this.getCustomers();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getCustomers() {
    this.CustomerList = [];
    this.rest.getCustomers().subscribe((data: {}) => {
      console.log(data);
      this.CustomerList = data as CustomerListData[];

    });
  }

}

export interface CustomerListData {
  CustomerID: Number;
  CenterID: Number;
  CustomerName: string;
  YearOfBirth: string;
  KYCDetails: string;
  AdharcardDetails: string;
  VoterID: string;
  ContactNumber1: string;
  ContactNumber2: string;
  ContactNumber3: string;
    PermanentAddressLine1 : string;
    PermanentAddressLine2 : string;
    PermanentCity : string;
    PermanentPinCode : string;
    TemporaryAddressLine1 : string;
    TemporaryAddressLine2 : string;
    TemporaryCity: string;
    TemporaryPinCode : string;
    JoiningDate : string;
    IsActive : Number;
}
