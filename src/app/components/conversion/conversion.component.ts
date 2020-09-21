import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataServiceService } from '../../services/data-service.service';
import { QuantityMeasurementService } from 'src/app/services/quantity-measurement.service';
import { HTTPServiceService } from 'src/app/services/httpservice.service';
import { Response } from '../../response';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  control = new FormControl();
  units: string[] = ["CM", "FEET", "YARD", "INCH"];
  textInputValue: any;
  unit = new FormControl(null);
  subUnit = new FormControl(null);
  inputUnit: string = "";
  dataa: string = "";
  public inputValue = 0;
  public unitValue: string = "";
  public result = 0;
  subUnitSelectedOne = "";
  subUnitSelectedTwo = "";
  filteredUnits: Observable<string[]>;

  constructor(private data: DataServiceService, private quantityMeasurement: QuantityMeasurementService) { }

  ngOnInit() {
    this.unit.setValue(this.units[0]);
    this.subUnit.setValue(this.units[1]);

    this.data.currentMessage.subscribe(message => {
      this.units = message.array
      console.log("ng ont ", this.units);
      if (this.units.length != 0) {
        this.unit.setValue(this.units[0]);
        this.subUnit.setValue(this.units[1]);
      }
      this.dataa = "";
      this.inputUnit = "";
      this.textInputValue = "";
      console.log("ngoninit unit", this.unit);
    });

  }
  keyPress(value: any) {
    this.textInputValue = value;
    this.passConversionData(this.unit.value.toString().toUpperCase(), this.subUnit.value.toString().toUpperCase(), value);
  }

  passConversionData(subUnitSelectedOne: any, subUnitSelectedTwo: any, inputValue: any) {
    if (this.inputValue == null || this.inputValue == 0 || this.inputValue.toString() == "") {
      inputValue = this.textInputValue;
    }
    if (this.textInputValue != null && this.textInputValue != 0 && this.textInputValue.toString() != "") {

      this.quantityMeasurement.convertData(this.unit.value.toString().toUpperCase(), this.subUnit.value.toString().toUpperCase(), inputValue).
        subscribe((res: Response) => {
          this.dataa = res.data;
        })
    }

  }
}