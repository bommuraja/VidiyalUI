import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  static readonly endpoint = 'http://www.service.vidiyal.in/API/';
  static readonly endpoint1 = 'http://localhost:50175/API/';

  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

    constructor(private http: HttpClient) {
    }

    getCenters(): Observable<any> {
      return this.http.get(CenterService.endpoint + 'Centers').pipe(
        map(this.extractData));
    }
    getCenter(id): Observable<any> {
      return this.http.get(CenterService.endpoint + 'Centers/' + id).pipe(
        map(this.extractData));
    }
  
    addCenter(CenterData): Observable<any> {
      console.log(CenterData);
      return this.http.post<any>(CenterService.endpoint + 'Centers', JSON.stringify(CenterData), CenterService.httpOptions).pipe(
        tap((center) => console.log(`added center w/ id=${CenterData.CenterID}`)),
        catchError(this.handleError<any>('addCenter'))
      );
    }
  
    updateCenter (CenterData): Observable<any> {
      console.log(CenterData);
      return this.http.post<any>(CenterService.endpoint + 'Centers', JSON.stringify(CenterData), CenterService.httpOptions).pipe(
        tap((center) => console.log(`update center w/ id=${CenterData.CenterID}`)),
        catchError(this.handleError<any>('update'))
      );
    }
  
    deleteCenter (id): Observable<any> {
      return this.http.get(CenterService.endpoint + 'DropCenter/' + id).pipe(
        map(this.extractData));
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
