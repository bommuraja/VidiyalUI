import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';

import {LoginService} from '../login/login.service';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})


export class LoginComponent implements OnInit {


    @Input() userAccountData: any = {
        UserAccountID : 0
        , RoleID : 0
        , RoleName : ''
       , UserAccountName : ''
       , ContactNumber : ''
       , UserName : ''
       , Password: ''
       , CreatedDate : ''
       , CreatedBy : ''
       , LastModifiedDate : ''
       , LastModifiedBy : ''
       , EMailAddress : ''
       , ContactAddress : ''
     };

    @Input() loginModel: any = {
        UserName: '',
        Password : ''
      };

    constructor(public rest: LoginService, private route: ActivatedRoute,
        private translate: TranslateService,
        public router: Router
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }



    ngOnInit() {}

    onLoggedin() {
    this.rest.getUserAccount(this.loginModel.UserName, this.loginModel.Password).subscribe((data: {}) => {
     console.log(data);
     this.userAccountData = data;
     localStorage.setItem('UserAccountID', this.userAccountData.UserAccountID);
     localStorage.setItem('UserAccountName', this.userAccountData.UserAccountName);
     localStorage.setItem('RoleName', this.userAccountData.RoleName);

     if (localStorage.getItem('RoleName') === 'Admin') {
         alert('Admin User');
         this.router.navigate(['/pages/center']);
      }
      if (localStorage.getItem('RoleName') === 'Review') {
        alert('Review User');
     }
     if (localStorage.getItem('RoleName') === 'Staff') {
        alert('Staff User');
     }

     });

        localStorage.setItem('isLoggedin', 'true');
    }
}
