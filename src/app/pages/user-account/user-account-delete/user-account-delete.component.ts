import { Component, OnInit, Input } from '@angular/core';
import { UserAccountService } from '../user-account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-account-delete',
  templateUrl: './user-account-delete.component.html',
  styleUrls: ['./user-account-delete.component.scss']
})
export class UserAccountDeleteComponent implements OnInit {

  @Input() userAccountData:any = { 
    UserAccountID :0
   ,RoleID :0
   ,UserAccountName :''
   ,ContactNumber :''
   ,UserName :''
   ,Password:''
   ,CreatedDate :''
   ,CreatedBy :''
   ,LastModifiedDate :''
   ,LastModifiedBy :''
   ,EMailAddress :''
   ,ContactAddress :''
 };

  constructor(public rest:UserAccountService, private route: ActivatedRoute, private router: Router){

  }


 ngOnInit() {
    this.rest.getUserAccount(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.userAccountData = data;
    });  
  }

  deleteUserAccount() {
    this.rest.deleteUserAccount(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['pages/user-account/user-account-list']);
    }, (err) => {
      console.log(err);
    });
    
  }

}
