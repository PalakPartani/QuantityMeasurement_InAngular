import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataServiceService } from '../../services/data-service.service';
import { QuantityMeasurementService } from 'src/app/services/quantity-measurement.service';
import { Response } from '../../response';
@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
})
export class ConversionComponent implements OnInit {
  control = new FormControl();
  units: string[] = ['CM', 'FEET', 'YARD', 'INCH'];
  textInputValue: any = 1;
  unit = new FormControl('CM');
  subUnit = new FormControl('FEET');
  inputUnit: any = 1;
  dataa: any = '0';
  respData = '';
  public inputValue = 0;
  public unitValue: string = '';
  public result = 0;
  subUnitSelectedOne = '';
  subUnitSelectedTwo = '';

  constructor(
    private data: DataServiceService,
    private quantityMeasurement: QuantityMeasurementService
  ) {}

  ngOnInit() {
    this.unit.setValue(this.units[0]);
    this.subUnit.setValue(this.units[1]);

    this.data.currentMessage.subscribe((message) => {
      this.units = message.array;
      if (this.units.length != 0) {
        this.unit.setValue(this.units[0]);
        this.subUnit.setValue(this.units[1]);
      }
      this.unit.value.toString().toUpperCase() == 'CM'
        ? this.setSubUnit(12, 1, 1)
        : this.unit.value.toString().toUpperCase() == 'LITRE'
        ? this.setSubUnit(1000, 1, 1)
        : this.setSubUnit(32, 0, 0);
    });
  }

  setSubUnit(dataValue: any, inputUnit: any, textinput: any) {
    this.dataa = dataValue;
    this.inputUnit = inputUnit;
    this.textInputValue = textinput;
  }

  keyPress(value: any) {
    this.textInputValue = value;
    this.passConversionData(
      this.unit.value.toString().toUpperCase(),
      this.subUnit.value.toString().toUpperCase(),
      value
    );
  }

  passConversionData(
    subUnitSelectedOne: any,
    subUnitSelectedTwo: any,
    inputValue: any
  ) {
    if (this.inputValue == 0) {
      inputValue = this.textInputValue;
    }
    this.quantityMeasurement
      .convertData(
        this.unit.value.toString().toUpperCase(),
        this.subUnit.value.toString().toUpperCase(),
        inputValue
      )
      .subscribe((res: Response) => {
        this.dataa = res.data;
      });

    console.log('Dataa ', this.dataa);

    // }
  }
}
