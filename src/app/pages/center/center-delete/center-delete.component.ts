import { Component, OnInit , Input} from '@angular/core';
import { CenterService } from '../center.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-center-delete',
  templateUrl: './center-delete.component.html',
  styleUrls: ['./center-delete.component.scss']
})
export class CenterDeleteComponent implements OnInit {

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

  deleteCenter() {
    this.rest.deleteCenter(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['pages/center/center-list']);
    }, (err) => {
      console.log(err);
    });

  }
}
