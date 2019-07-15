import { Component, OnInit,ViewChild} from '@angular/core';
import { UserAccountService } from '../user-account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-account-list',
  templateUrl: './user-account-list.component.html',
  styleUrls: ['./user-account-list.component.scss']
})
export class UserAccountListComponent implements OnInit {

  UserAccountList:UserAccountData[] = [];

  constructor(public rest:UserAccountService, private route: ActivatedRoute, private router: Router) { 
    this.UserAccountList = [];
    this.rest.getUserAccounts().subscribe((data: {}) => {
      console.log(data);
      this.UserAccountList = data as UserAccountData[]
    
    });
  }

  ngOnInit() {
    this.getUserAccounts();
  }

  add() {
    this.router.navigate(['pages/user-account/user-account-add']);
  }
  delete(id) {
    this.rest.addUserAccount(id)
      .subscribe(res => {
          this.getUserAccounts();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getUserAccounts() {
    this.UserAccountList = [];
    this.rest.getUserAccounts().subscribe((data: {}) => {
      console.log(data);
      this.UserAccountList = data as UserAccountData[]
    
    });
  } 

}
export interface UserAccountData {
 
  UserAccountID :Number;
  RoleID :Number;
  UserAccountName :string;
  ContactNumber :string;
  UserName :string;
  Password:string;
  CreatedDate :string;
  CreatedBy :string;
  LastModifiedDate:string;
  LastModifiedBy:string;
  EMailAddress :string;
  ContactAddress :string;
}
