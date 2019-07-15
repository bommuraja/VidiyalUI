import { Component, OnInit ,Input} from '@angular/core';
import { UserAccountService } from '../user-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-account-add',
  templateUrl: './user-account-add.component.html',
  styleUrls: ['./user-account-add.component.scss']
})
export class UserAccountAddComponent implements OnInit {

  constructor(public rest:UserAccountService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  @Input() userAccountData = { 
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


  

  addUserAccount() {
    this.rest.addUserAccount(this.userAccountData).subscribe((result) => {
      this.router.navigate(['pages/user-account/user-account-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
