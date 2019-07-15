import { Component, OnInit, ViewChild} from '@angular/core';
import { CenterService } from '../center.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.scss']
})
export class CenterListComponent implements OnInit {
  centerList: CenterList[] = [];

  constructor(public rest: CenterService, private route: ActivatedRoute, private router: Router) {
    this.centerList = [];
    this.rest.getCenters().subscribe((data: {}) => {
      console.log(data);
      this.centerList = data as CenterList[];
    });
   }


  ngOnInit() {
  }
  add() {
    this.router.navigate(['/pages/center/center-add/0/AddPage']);
  }

  delete(id) {
    this.rest.addCenter(id)
      .subscribe(res => {
          this.getCenters();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getCenters() {
    this.centerList = [];
    this.rest.getCenters().subscribe((data: {}) => {
      console.log(data);
      this.centerList = data as CenterList[];

    });
  }

}


export interface CenterList {
  CenterID : Number;
  CenterName : string;
  CenterHeadName : string;
  CenterAddressLine1 : string;
  CenterAddressLine2 : string;
  City: string;
  CenterContactNumber : string;
  CenterStartDate : string;
  CreatedDate : string;
  CreatedBy : string;
}
