import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { HTTPServiceService } from '../services/httpservice.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuantityMeasurementService {
  public unitTypeOne: string;
  public unitTypeSecond: string;
  public value;
  baseUrl = environment.baseUrl;

  writerConversionUrl = '/quantity/measurement/convertvalue';
  constructor(private httpService: HTTPServiceService) {}

  convertData(unitTypeOne: string, unitTypeSecond: string, value: any): any {
    const unitConversionDTO = {
      unitTypeOne: unitTypeOne,
      unitTypeSecond: unitTypeSecond,
      value: value,
    };
    var result = this.httpService.getConversionResult(
      unitConversionDTO,
      this.baseUrl + this.writerConversionUrl
    );

    console.log('Result of conversion : ' + JSON.stringify(result));
    console.log('result ' + result);
    return result;
  }
}
