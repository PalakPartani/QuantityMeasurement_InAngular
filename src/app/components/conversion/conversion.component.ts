import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataServiceService } from '../../services/data-service.service';
import { QuantityMeasurementService } from 'src/app/services/quantity-measurement.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  control = new FormControl();
  units: string[] = ['Yard', 'Inch', 'CM', 'Meter'];
  unit: string = "";
  inputUnit: string = "";
  public inputValue = 1;
  public unitValue: string = "";
  public result = 0;
  subUnitSelectedOne = "";
  subUnitSelectedTwo = "";
  filteredUnits: Observable<string[]>;

  constructor(private data: DataServiceService, private quantityMeasurement: QuantityMeasurementService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.units = message.array
      console.log("Inside conversion", message);
    });

    // this.filteredUnits = this.control.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );

  }
  keyPress(event: any, val: string, val2: string) {
    console.log("Inside key press", event);
    console.log("value", val);
    console.log("Api data ", val2 + "", val + "" + this.inputUnit + event.key + "unit");
    console.log("unit val ", this.unitValue + "", this.unit)
    this.passConversionData(this.unit, "CM", this.inputUnit + event.key);
  }

  passConversionData(subUnitSelectedOne: string, subUnitSelectedTwo: string, inputValue: any) {
    this.quantityMeasurement.convertData(subUnitSelectedOne, subUnitSelectedTwo, inputValue).
      subscribe(res => {
        this.result = res
        console.log("Inside component and result is : ", this.result);
      })
  }

  // private _filter(value: string): string[] {
  //   const filterValue = this._normalizeValue(value);
  //   console.log("Inside filter " + filterValue);

  //   return this.units.filter(unit => this._normalizeValue(unit).includes(filterValue));
  // }

  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }

}