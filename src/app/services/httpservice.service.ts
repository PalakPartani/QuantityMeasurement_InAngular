import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HTTPServiceService {
  writerConversionUrl = '/quantity/measurement/convertvalue';
  private messageSource = new BehaviorSubject({ array: [] });
  currentResponse = this.messageSource.asObservable();
  constructor(private http: HttpClient) {}

  getConversionResult(unitConversionDTO: any, url: string) {
    return this.http.post(url, unitConversionDTO);
  }
}
