import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  static readonly endpoint = 'http://www.service.vidiyal.in/API/';
  static readonly endpoint1 = 'http://localhost:50175/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }

  public customerFormReqFieldValidationList: string[] = [];


  getCustomers(): Observable<any> {
    return this.http.get(CustomerService.endpoint + 'Customers').pipe(
      map(this.extractData));
  }
  getCustomer(id): Observable<any> {
    return this.http.get(CustomerService.endpoint + 'Customers/' + id).pipe(
      map(this.extractData));
  }

  addCustomer(CustomerData): Observable<any> {
    return this.http.post<any>(CustomerService.endpoint + 'Customers', JSON.stringify(CustomerData), CustomerService.httpOptions).pipe(
       tap((customer) => console.log(`added customer w/ id=${CustomerData.CustomerID}`)),
       catchError(this.handleError<any>('addCustomer'))
    );
  }

  updateCustomer (CustomerData): Observable<any> {
    console.log(CustomerData);
    return this.http.post<any>(CustomerService.endpoint + 'Customers', JSON.stringify(CustomerData), CustomerService.httpOptions).pipe(
      tap((customer) => console.log(`update customer w/ id=${CustomerData.CustomerID}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  deleteCustomer (id): Observable<any> {
    return this.http.get(CustomerService.endpoint + 'DropCustomer/' + id).pipe(
      map(this.extractData));
  }

  requiredFieldValidationCustomer (CustomerData): string[] {

    this.customerFormReqFieldValidationList = [];

    if (CustomerData.CenterID === 0 ) {
      this.customerFormReqFieldValidationList.push('Center Name');
    }
    if (CustomerData.CustomerName == null || CustomerData.CustomerName === '' ) {
      this.customerFormReqFieldValidationList.push('Customer Name');
    }
    if (CustomerData.YearOfBirth == null || CustomerData.YearOfBirth === '' ) {
      this.customerFormReqFieldValidationList.push('Date Of Birth');
    }
    if (CustomerData.JoiningDate == null || CustomerData.JoiningDate === '' ) {
      this.customerFormReqFieldValidationList.push('Joining Date');
    }
    if (CustomerData.AdharcardDetails == null || CustomerData.AdharcardDetails === '' ) {
      this.customerFormReqFieldValidationList.push('Adharcard Details');
    }
    if (CustomerData.VoterID == null || CustomerData.VoterID === '' ) {
      this.customerFormReqFieldValidationList.push('VoterID');
    }
    if (CustomerData.ContactNumber1 == null || CustomerData.ContactNumber1 === '' ) {
      this.customerFormReqFieldValidationList.push('Contact Number');
    }
    if (CustomerData.PermanentAddressLine1 == null || CustomerData.PermanentAddressLine1 === '' ) {
      this.customerFormReqFieldValidationList.push('Permanent Address');
    }


    return this.customerFormReqFieldValidationList;
  }


  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
