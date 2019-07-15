import { Component, OnInit , Input} from '@angular/core';
import { CenterService } from '../center.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-center-edit',
  templateUrl: './center-edit.component.html',
  styleUrls: ['./center-edit.component.scss']
})
export class CenterEditComponent implements OnInit {

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

  updateCenter() {
    this.rest.updateCenter(this.centerData).subscribe((result) => {
      this.router.navigate(['pages/center/center-list']);
    }, (err) => {
      console.log(err);
    });
    // this.route.snapshot.params['id']
  }


}
