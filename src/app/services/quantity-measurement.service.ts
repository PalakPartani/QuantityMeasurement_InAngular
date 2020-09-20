import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { HTTPServiceService } from '../services/httpservice.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuantityMeasurementService {
  public unitTypeOne: string;
  public unitTypeSecond: string;
  public value;

  constructor(private httpService: HTTPServiceService) { }

  // do(): Observable<any> {
  //   console.log("Inside QM service");
  //   return this.httpService.getBaseUnits();

  // }
  //:Observable<any>
  convertData(unitTypeOne: string, unitTypeSecond: string, value: any): any {
    const unitConversionDTO = {
      "unitTypeOne": unitTypeOne,
      "unitTypeSecond": unitTypeSecond,
      "value": value

    }
    var result = this.httpService.getConversionResult(unitConversionDTO);

    console.log("Result of conversion : " + JSON.stringify(result));
    console.log("result " + result);
    return result;
  }
}
