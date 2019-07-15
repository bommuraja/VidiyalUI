import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(public rest: CustomerService, private route: ActivatedRoute, private router: Router) { }
  @Input() customerData: any = {
    CustomerID: 0,
    CenterID: 0,
    CenterList: [],
    CustomerName: '',
    YearOfBirth: '',
    KYCDetails: '',
    AdharcardDetails: '',
    VoterID: '',
    ContactNumber1: '',
    ContactNumber2: '',
    ContactNumber3: '',
    PermanentAddressLine1 : '',
    PermanentAddressLine2 : '',
    PermanentCity : '',
    PermanentPinCode : '',
    TemporaryAddressLine1 : '',
    TemporaryAddressLine2 : '',
    TemporaryCity: '',
    TemporaryPinCode : '',
    JoiningDate : '',
    IsActive : 0,
    IncomeType: [],
    IncomeTypeOne: 0,
    IncomeTypeTwo: 0,
    IncomeTypeThree: 0,
    IncomeNoteOne: '',
    IncomeNoteTwo: '',
    IncomeNoteThree: '',
    IncomeAmountOne: '',
    IncomeAmountTwo: '',
    IncomeAmountThree: '',
    CustomerRegStatusList: [],
    CustomerRegStatusID: '',
    UserAccountList: [],
    RegStatusEnterdByID: '',
    RegStatusEnterdByDate: '',
    RegStatusReviewedByID: '',
    RegStatusReviewedByDate: '',
    RegStatusApprovedByID: '',
    RegStatusApprovedByDate: '',
    CreatedDate: '',
    CreatedBy: '',
    EntryComments:'',
    ReviewComments:'',
    ApproveComments:'',
    PageType:'',
    ActionButtonName:''
    };

    calculateSuplusAmount(){
      this.customerData.IncomeAmountThree = (this.customerData.IncomeAmountOne-this.customerData.IncomeAmountTwo) 
     }
  
    ngOnInit() {
    this.rest.getCustomer(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.customerData = data;
      if(this.route.snapshot.params['PageType']=='AddPage'){
        this.customerData.PageType = 'AddPage';
        this.customerData.ActionButtonName = 'Add Customer';
      }
      if(this.route.snapshot.params['PageType']=='EditPage'){
        this.customerData.PageType = 'EditPage';
        this.customerData.ActionButtonName = 'Update';
      }
      if(this.route.snapshot.params['PageType']=='ViewPage'){
        this.customerData.PageType = 'ViewPage';
        this.customerData.ActionButtonName = 'Back';
      }
      if(this.route.snapshot.params['PageType']=='DeletePage'){
        this.customerData.PageType = 'DeletePage';
        this.customerData.ActionButtonName = 'Delete';
      }
    });
  }
  

  addCustomer() {
    const validationErrors = this.rest.requiredFieldValidationCustomer(this.customerData);
    var varlidationFields ='';

    if (validationErrors.length > 0) {
      
     for (var i=0;i< validationErrors.length;i++) {
       if((i + 1)===validationErrors.length) {
        varlidationFields = varlidationFields + (i+1) + " ."+ validationErrors[i];
       } else {
      varlidationFields = varlidationFields + (i+1) + " ."+ validationErrors[i] + ' ,';
       }
     }
      alert('Please fill ' + varlidationFields);
    } else {
      if(this.customerData.PageType == 'AddPage'){
    this.rest.addCustomer(this.customerData).subscribe((result) => {
       this.router.navigate(['pages/customer/customer-list']);
     }, (err) => {
       console.log(err);
     }); 
    }
    if(this.customerData.PageType == 'EditPage'){
      this.rest.updateCustomer(this.customerData).subscribe((result) => {
        this.router.navigate(['pages/customer/customer-list']);
      }, (err) => {
        console.log(err);
      });
    }
    if(this.customerData.PageType == 'ViewPage'){
      this.router.navigate(['pages/customer/customer-list']); 
    }
    if(this.customerData.PageType == 'DeletePage'){
      this.rest.deleteCustomer(this.route.snapshot.params['id']).subscribe((result) => {
        this.router.navigate(['pages/customer/customer-list']);
      }, (err) => {
        console.log(err);
      });
    }
  }
  }

}
