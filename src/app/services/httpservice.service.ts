import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPServiceService {
  baseUrl = "http://localhost:8089"
  writerBaseUrl = "/quantity/measurement/unit";
  writerSubUnitUrl = "/quantity/measurement/sub/{unitType}";
  writerConversionUrl = "/quantity/measurement/convertvalue";
  private messageSource = new BehaviorSubject({ array: [] });
  currentResponse = this.messageSource.asObservable();
  constructor(private http: HttpClient) { }

  getBaseUnits(): Observable<any> {
    return this.http.get(this.baseUrl + this.writerBaseUrl);
  }
  getSubUnits(): Observable<any> {
    return this.http.get(this.baseUrl + this.writerSubUnitUrl);
  }
  getConversionResult(unitConversionDTO: any): Observable<any> {
    return this.http.post(this.baseUrl + this.writerConversionUrl, unitConversionDTO);
  }
}
