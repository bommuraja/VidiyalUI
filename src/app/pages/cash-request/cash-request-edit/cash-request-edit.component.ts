import { Component, OnInit , Input} from '@angular/core';
import { CashRequestService } from '../cash-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-request-edit',
  templateUrl: './cash-request-edit.component.html',
  styleUrls: ['./cash-request-edit.component.scss']
})
export class CashRequestEditComponent implements OnInit {

  @Input() cashRequestData: any = {
    CashRequestID : 0,
    UserAccountID : 0,
    RequestDate : '',
    ResponseDate : '',
    RequestAmount : '',
    ResponseAmount : '',
    CreatedDate : '',
    CreatedBy : '',
    LastModifiedDate : '',
    LastModifiedBy : ''
  };

  constructor(public rest: CashRequestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCashRequest(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.cashRequestData = data;
    });
  }

    updateCashRequest() {
      this.rest.updateCashRequest(this.cashRequestData).subscribe((result) => {
        this.router.navigate(['pages/cash-request/cash-request-list']);
      }, (err) => {
        console.log(err);
      });
      // this.route.snapshot.params['id']
    }
  }


