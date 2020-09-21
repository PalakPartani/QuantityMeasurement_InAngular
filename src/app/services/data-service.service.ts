import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject({ array: [] });

  private response = new BehaviorSubject({ array: [] });

  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeUnits(mainUnit: any) {
    this.messageSource.next(mainUnit)
  }

  clearData(mainUnit: any) {
    this.response = new BehaviorSubject({ array: [] });
  }
}
