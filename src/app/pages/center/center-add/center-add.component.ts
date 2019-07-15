import { Component, OnInit , Input} from '@angular/core';
import { CenterService } from '../center.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-center-add',
  templateUrl: './center-add.component.html',
  styleUrls: ['./center-add.component.scss']
})
export class CenterAddComponent implements OnInit {

  constructor(public rest: CenterService, private route: ActivatedRoute, private router: Router) { }

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
    CreatedBy : '',
    PageType: '',
    ActionButtonName: '',
  };
  ngOnInit() {
    this.rest.getCenter(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.centerData = data;
      if(this.route.snapshot.params['PageType']=='AddPage'){
        this.centerData.PageType= 'AddPage';
        this.centerData.ActionButtonName= 'Add Center';
      }
      if(this.route.snapshot.params['PageType']=='EditPage'){
        this.centerData.PageType= 'EditPage';
        this.centerData.ActionButtonName= 'Edit';
      }
      if(this.route.snapshot.params['PageType']=='ViewPage'){
        this.centerData.PageType= 'ViewPage';
        this.centerData.ActionButtonName= 'Back';
      }
      if(this.route.snapshot.params['PageType']=='DeletePage'){
        this.centerData.PageType= 'DeletePage';
        this.centerData.ActionButtonName= 'Delete';
      }

    });
  }
  addCenter() {

    if(this.centerData.PageType== 'AddPage'){
    this.rest.addCenter(this.centerData).subscribe((result) => {
      this.router.navigate(['pages/center/center-list']);
    }, (err) => {
      console.log(err);
    });
  }

  if(this.centerData.PageType== 'EditPage'){
    this.rest.updateCenter(this.centerData).subscribe((result) => {
      this.router.navigate(['pages/center/center-list']);
    }, (err) => {
      console.log(err);
    });
  }

  if(this.centerData.PageType== 'ViewPage'){
    this.router.navigate(['pages/center/center-list']);
  }

  if(this.centerData.PageType== 'DeletePage'){
    this.rest.deleteCenter(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['pages/center/center-list']);
    }, (err) => {
      console.log(err);
    });
  }

  }

}
