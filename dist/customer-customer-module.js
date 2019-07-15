(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/pages/customer/customer-add/customer-add.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/customer/customer-add/customer-add.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Add Customer </h2>  \r\n    <div class=\"row\">\r\n          <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n              <b><label class=\"control-label\">CustomerID </label></b>\r\n          </div>\r\n          <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n              <input class=\"form-control\" [(ngModel)]=\"customerData.CustomerID\" placeholder=\"CustomerID\" disabled/>\r\n          </div>\r\n          <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n              <b><label class=\"control-label required\">Location Name </label></b>\r\n          </div>\r\n          <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n            <select (change)=\"customerData.CenterID=($event.target.value)\" [(ngModel)]=\"customerData.CenterID\">\r\n                <option value=\"0\">--All--</option>\r\n                <option *ngFor=\"let center of customerData.CenterList\" value={{center.CenterID}}>\r\n                    {{center.CenterName}}\r\n                </option>\r\n            </select>\r\n          </div>\r\n    </div>  \r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n            <b><label class=\"control-label required\">Customer Name </label></b>\r\n        </div>\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n            <input class=\"form-control\" [(ngModel)]=\"customerData.CustomerName\" placeholder=\"CustomerName\" />\r\n        </div>\r\n        <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n            <b><label class=\"control-label required\">Date of Birth </label></b>\r\n        </div>\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n            <input class=\"form-control\" type=\"date\" [(ngModel)]=\"customerData.YearOfBirth\" placeholder=\"YearOfBirth\" />\r\n        </div>\r\n  </div>  \r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label required\">Joining Date </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"customerData.JoiningDate\" placeholder=\"JoiningDate\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label required\">Adharcard Details </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" [(ngModel)]=\"customerData.AdharcardDetails\" placeholder=\"AdharcardDetails\" />\r\n    </div>\r\n</div> \r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">VoterID </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control required\" [(ngModel)]=\"customerData.VoterID\" placeholder=\"VoterID\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label required\">ContactNumber1 </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.ContactNumber1\" placeholder=\"ContactNumber1\" />\r\n    </div>\r\n</div>  \r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">ContactNumber2 </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.ContactNumber2\" placeholder=\"ContactNumber2\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">ContactNumber3 </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.ContactNumber3\" placeholder=\"ContactNumber3\" />\r\n    </div>\r\n</div> \r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">PermanentAddressLine1 </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control required\" [(ngModel)]=\"customerData.PermanentAddressLine1\" placeholder=\"PermanentAddressLine1\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">TemporaryAddressLine1 </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" [(ngModel)]=\"customerData.TemporaryAddressLine1\" placeholder=\"TemporaryAddressLine1\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">PermanentAddressLine2 </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\" [(ngModel)]=\"customerData.PermanentAddressLine2\" placeholder=\"PermanentAddressLine2\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">TemporaryAddressLine2 </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" [(ngModel)]=\"customerData.TemporaryAddressLine2\" placeholder=\"TemporaryAddressLine2\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">PermanentCity </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\" [(ngModel)]=\"customerData.PermanentCity\" placeholder=\"PermanentCity\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">TemporaryCity </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" [(ngModel)]=\"customerData.TemporaryCity\" placeholder=\"TemporaryCity\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">PermanentPinCode </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.PermanentPinCode\" placeholder=\"PermanentPinCode\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">TemporaryPinCode </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.TemporaryPinCode\" placeholder=\"TemporaryPinCode\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Income Details </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\" [(ngModel)]=\"customerData.IncomeNoteOne\" placeholder=\"Income Source\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Income Amount </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.IncomeAmountOne\" placeholder=\"Income Amount\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Expences Details </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.IncomeNoteTwo\" placeholder=\"Expences Details\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Expences Amount </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.IncomeAmountTwo\" (blur)=\"calculateSuplusAmount()\" placeholder=\"Expence Amount\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Surplus Details </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"customerData.IncomeNoteThree\" placeholder=\"Surplus Details\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Surplus Amount </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" [(ngModel)]=\"customerData.IncomeAmountThree\" placeholder=\"Surplus Amount\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Reg EnterBy </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <select (change)=\"customerData.RegStatusEnterdByID=($event.target.value)\" [(ngModel)]=\"customerData.RegStatusEnterdByID\">\r\n            <option value=\"0\">--All--</option>\r\n            <option *ngFor=\"let useAcc of customerData.UserAccountList\" value={{useAcc.UserAccountID}}>\r\n                {{useAcc.FullName}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">RegEnterdByDate </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"customerData.RegStatusEnterdByDate\" placeholder=\"RegStatusEnterdByDate\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Reg Review By </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <select (change)=\"customerData.RegStatusReviewedByID=($event.target.value)\" [(ngModel)]=\"customerData.RegStatusReviewedByID\">\r\n            <option value=\"0\">--All--</option>\r\n            <option *ngFor=\"let useAcc of customerData.UserAccountList\" value={{useAcc.UserAccountID}}>\r\n                {{useAcc.FullName}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">RegReviewedByDate </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"customerData.RegStatusReviewedByDate\" placeholder=\"RegStatusReviewedByDate\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Reg Approve By </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <select (change)=\"customerData.RegStatusApprovedByID=($event.target.value)\" [(ngModel)]=\"customerData.RegStatusApprovedByID\">\r\n            <option value=\"0\">--All--</option>\r\n            <option *ngFor=\"let useAcc of customerData.UserAccountList\" value={{useAcc.UserAccountID}}>\r\n                {{useAcc.FullName}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">RegApprovedByDate </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"customerData.RegStatusApprovedByDate\" placeholder=\"RegStatusApprovedByDate\" />\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Entty Comments </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\"  [(ngModel)]=\"customerData.EntryComments\" placeholder=\"Reg Enter Comments\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n            <b><label class=\"control-label\">Other KYC </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n            <input class=\"form-control\"  [(ngModel)]=\"customerData.KYCDetails\" placeholder=\"Other KYC Documents\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Review Comments </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\"  [(ngModel)]=\"customerData.ReviewComments\"  placeholder=\"Reg Review Comments\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n            <b><label class=\"control-label\"> Form Status</label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n            <select (change)=\"customerData.CustomerRegStatusID=($event.target.value)\" [(ngModel)]=\"customerData.CustomerRegStatusID\">\r\n                    <option value=\"0\">--All--</option>\r\n                    <option *ngFor=\"let regStatus of customerData.CustomerRegStatusList\" value={{regStatus.CustomerRegStatusID}}>\r\n                        {{regStatus.CustomerRegStatus}}\r\n                    </option>\r\n                </select>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n        <b><label class=\"control-label\">Approve Comments </label></b>\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group \">\r\n        <input class=\"form-control\"  [(ngModel)]=\"customerData.ApproveComments\"  placeholder=\"Reg Approve Comments\" />\r\n    </div>\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 form-group\">\r\n    </div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4 form-group\">\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n    <button (click)=\"addCustomer()\">{{customerData.ActionButtonName}}</button>\r\n</div>  "

/***/ }),

/***/ "./src/app/pages/customer/customer-add/customer-add.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/customer/customer-add/customer-add.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label.required {\n  font-weight: bold; }\n\nlabel.required:after {\n  color: #e32;\n  content: ' *';\n  display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXIvY3VzdG9tZXItYWRkL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFZpZGl5YWxVSS1tYXN0ZXJcXFZpZGl5YWxVSS1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0b21lclxcY3VzdG9tZXItYWRkXFxjdXN0b21lci1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLGdCQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdG9tZXIvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsLnJlcXVpcmVkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmxhYmVsLnJlcXVpcmVkOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjZTMyO1xyXG4gICAgY29udGVudDogJyAqJztcclxuICAgIGRpc3BsYXk6aW5saW5lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/customer/customer-add/customer-add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/customer/customer-add/customer-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function() { return CustomerAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/pages/customer/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerAddComponent = /** @class */ (function () {
    function CustomerAddComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.customerData = {
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
            PermanentAddressLine1: '',
            PermanentAddressLine2: '',
            PermanentCity: '',
            PermanentPinCode: '',
            TemporaryAddressLine1: '',
            TemporaryAddressLine2: '',
            TemporaryCity: '',
            TemporaryPinCode: '',
            JoiningDate: '',
            IsActive: 0,
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
            EntryComments: '',
            ReviewComments: '',
            ApproveComments: '',
            PageType: '',
            ActionButtonName: ''
        };
    }
    CustomerAddComponent.prototype.calculateSuplusAmount = function () {
        this.customerData.IncomeAmountThree = (this.customerData.IncomeAmountOne - this.customerData.IncomeAmountTwo);
    };
    CustomerAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getCustomer(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log(data);
            _this.customerData = data;
            if (_this.route.snapshot.params['PageType'] == 'AddPage') {
                _this.customerData.PageType = 'AddPage';
                _this.customerData.ActionButtonName = 'Add Customer';
            }
            if (_this.route.snapshot.params['PageType'] == 'EditPage') {
                _this.customerData.PageType = 'EditPage';
                _this.customerData.ActionButtonName = 'Update';
            }
            if (_this.route.snapshot.params['PageType'] == 'ViewPage') {
                _this.customerData.PageType = 'ViewPage';
                _this.customerData.ActionButtonName = 'Back';
            }
            if (_this.route.snapshot.params['PageType'] == 'DeletePage') {
                _this.customerData.PageType = 'DeletePage';
                _this.customerData.ActionButtonName = 'Delete';
            }
        });
    };
    CustomerAddComponent.prototype.addCustomer = function () {
        var _this = this;
        var validationErrors = this.rest.requiredFieldValidationCustomer(this.customerData);
        var varlidationFields = '';
        if (validationErrors.length > 0) {
            for (var i = 0; i < validationErrors.length; i++) {
                if ((i + 1) === validationErrors.length) {
                    varlidationFields = varlidationFields + (i + 1) + " ." + validationErrors[i];
                }
                else {
                    varlidationFields = varlidationFields + (i + 1) + " ." + validationErrors[i] + ' ,';
                }
            }
            alert('Please fill ' + varlidationFields);
        }
        else {
            if (this.customerData.PageType == 'AddPage') {
                this.rest.addCustomer(this.customerData).subscribe(function (result) {
                    _this.router.navigate(['pages/customer/customer-list']);
                }, function (err) {
                    console.log(err);
                });
            }
            if (this.customerData.PageType == 'EditPage') {
                this.rest.updateCustomer(this.customerData).subscribe(function (result) {
                    _this.router.navigate(['pages/customer/customer-list']);
                }, function (err) {
                    console.log(err);
                });
            }
            if (this.customerData.PageType == 'ViewPage') {
                this.router.navigate(['pages/customer/customer-list']);
            }
            if (this.customerData.PageType == 'DeletePage') {
                this.rest.deleteCustomer(this.route.snapshot.params['id']).subscribe(function (result) {
                    _this.router.navigate(['pages/customer/customer-list']);
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerAddComponent.prototype, "customerData", void 0);
    CustomerAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-add',
            template: __webpack_require__(/*! ./customer-add.component.html */ "./src/app/pages/customer/customer-add/customer-add.component.html"),
            styles: [__webpack_require__(/*! ./customer-add.component.scss */ "./src/app/pages/customer/customer-add/customer-add.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerAddComponent);
    return CustomerAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/customer/customer-list/customer-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/customer/customer-list/customer-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button (click)=\"add()\">\n    Add New \n  </button>\n</div>  \n<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">CustomerNumber</th>\n      <th scope=\"col\">CustomerName</th>     \n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let cust of CustomerList; let i=index;\">\n    <tr>\n      <th scope=\"row\">{{i+1}}</th>      \n      <td>{{cust.CustomerID}}</td>\n      <td>{{cust.CustomerName}}</td>       \n      <td>          \n        <a routerLink=\"/pages/customer/customer-add/{{cust.CustomerID}}/EditPage\">\n          Edit\n        </a>\n        <a routerLink=\"/pages/customer/customer-add/{{cust.CustomerID}}/ViewPage\">\n          View\n        </a>\n        <a routerLink=\"/pages/customer/customer-add/{{cust.CustomerID}}/DeletePage\">\n          Delete\n        </a>\n      </td>\n    </tr>\n   \n  </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/pages/customer/customer-list/customer-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/customer/customer-list/customer-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/customer/customer-list/customer-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/customer/customer-list/customer-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/pages/customer/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(rest, route, router) {
        var _this = this;
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.CustomerList = [];
        this.CustomerList = [];
        this.rest.getCustomers().subscribe(function (data) {
            console.log(data);
            _this.CustomerList = data;
        });
    }
    CustomerListComponent.prototype.ngOnInit = function () {
    };
    CustomerListComponent.prototype.add = function () {
        this.router.navigate(['pages/customer/customer-add/0/AddPage']);
    };
    CustomerListComponent.prototype.delete = function (id) {
        var _this = this;
        this.rest.deleteCustomer(id)
            .subscribe(function (res) {
            _this.getCustomers();
        }, function (err) {
            console.log(err);
        });
    };
    CustomerListComponent.prototype.getCustomers = function () {
        var _this = this;
        this.CustomerList = [];
        this.rest.getCustomers().subscribe(function (data) {
            console.log(data);
            _this.CustomerList = data;
        });
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/pages/customer/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.scss */ "./src/app/pages/customer/customer-list/customer-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/pages/customer/customer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/customer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/pages/customer/customer.component.ts");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "./src/app/pages/customer/customer-add/customer-add.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/pages/customer/customer-list/customer-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"],
        children: [
            { path: '', redirectTo: 'customer' },
            { path: 'customer-list', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"] },
            { path: 'customer-add/:id/:PageType', component: _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_3__["CustomerAddComponent"] },
            { path: 'customer', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"] }
        ]
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/customer/customer.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/customer/customer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/pages/customer/customer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/customer/customer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/customer/customer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/customer/customer.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/pages/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/pages/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/customer/customer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.module.ts ***!
  \***************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.component */ "./src/app/pages/customer/customer.component.ts");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "./src/app/pages/customer/customer-add/customer-add.component.ts");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/pages/customer/customer-routing.module.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/pages/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"], _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_5__["CustomerAddComponent"], _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_7__["CustomerListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customer_routing_module__WEBPACK_IMPORTED_MODULE_6__["CustomerRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/pages/customer/customer.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/customer/customer.service.ts ***!
  \****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.customerFormReqFieldValidationList = [];
    }
    CustomerService_1 = CustomerService;
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(CustomerService_1.endpoint + 'Customers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    CustomerService.prototype.getCustomer = function (id) {
        return this.http.get(CustomerService_1.endpoint + 'Customers/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    CustomerService.prototype.addCustomer = function (CustomerData) {
        return this.http.post(CustomerService_1.endpoint + 'Customers', JSON.stringify(CustomerData), CustomerService_1.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (customer) { return console.log("added customer w/ id=" + CustomerData.CustomerID); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addCustomer')));
    };
    CustomerService.prototype.updateCustomer = function (CustomerData) {
        console.log(CustomerData);
        return this.http.post(CustomerService_1.endpoint + 'Customers', JSON.stringify(CustomerData), CustomerService_1.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (customer) { return console.log("update customer w/ id=" + CustomerData.CustomerID); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        return this.http.get(CustomerService_1.endpoint + 'DropCustomer/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    CustomerService.prototype.requiredFieldValidationCustomer = function (CustomerData) {
        this.customerFormReqFieldValidationList = [];
        if (CustomerData.CenterID === 0) {
            this.customerFormReqFieldValidationList.push('Center Name');
        }
        if (CustomerData.CustomerName == null || CustomerData.CustomerName === '') {
            this.customerFormReqFieldValidationList.push('Customer Name');
        }
        if (CustomerData.YearOfBirth == null || CustomerData.YearOfBirth === '') {
            this.customerFormReqFieldValidationList.push('Date Of Birth');
        }
        if (CustomerData.JoiningDate == null || CustomerData.JoiningDate === '') {
            this.customerFormReqFieldValidationList.push('Joining Date');
        }
        if (CustomerData.AdharcardDetails == null || CustomerData.AdharcardDetails === '') {
            this.customerFormReqFieldValidationList.push('Adharcard Details');
        }
        if (CustomerData.VoterID == null || CustomerData.VoterID === '') {
            this.customerFormReqFieldValidationList.push('VoterID');
        }
        if (CustomerData.ContactNumber1 == null || CustomerData.ContactNumber1 === '') {
            this.customerFormReqFieldValidationList.push('Contact Number');
        }
        if (CustomerData.PermanentAddressLine1 == null || CustomerData.PermanentAddressLine1 === '') {
            this.customerFormReqFieldValidationList.push('Permanent Address');
        }
        return this.customerFormReqFieldValidationList;
    };
    CustomerService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CustomerService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    var CustomerService_1;
    CustomerService.endpoint = 'http://www.service.vidiyal.in/API/';
    CustomerService.endpoint1 = 'http://localhost:50175/API/';
    CustomerService.httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        })
    };
    CustomerService = CustomerService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map