import { Component, OnInit , Input} from '@angular/core';
import { CenterService } from '../center.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-center-view',
  templateUrl: './center-view.component.html',
  styleUrls: ['./center-view.component.scss']
})
export class CenterViewComponent implements OnInit {

  @Input() centerData: any = {
    CenterID : 0,
    CenterName : '',
    CenterHeadName : '',
    CenterAddressLine1 : '',
    CenterAddressLine2 : '',
    City: '',
    CenterContactNumber : '',
    CenterStartDate : '',
    CreatedDate : '',
    CreatedBy :''
  };

  constructor(public rest: CenterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCenter(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.centerData = data;
    });
  }
  navigateToCenterList() {
    this.router.navigate(['pages/center/center-list']);
}

}
