import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataServiceService } from '../../services/data-service.service';
import { QuantityMeasurementService } from 'src/app/services/quantity-measurement.service';
import { HTTPServiceService } from 'src/app/services/httpservice.service';
import { Response } from '../../response';
@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  control = new FormControl();
  units: string[] = ['Yard', 'Inch', 'CM', 'Meter'];
  textInputValue: any;
  unit: string = "";
  subUnit: string = "";
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
    this.data.currentMessage.subscribe(message => {
      this.units = message.array
      console.log("Inside conversion", message);
    });
  }
  keyPress(event: any, val: string, val2: string) {
    console.log("Inside key press", event);
    console.log("value", val);
    console.log("Api data ", val2 + "", val + "" + this.inputUnit + event.key + "unit");
    console.log("unit val ", this.unitValue + "unitttt", this.unit);
    console.log("Subunit to be converted ", this.subUnit)
    this.textInputValue = this.inputUnit + event.key;
    this.passConversionData(this.unit.toUpperCase(), this.subUnit.toUpperCase(), this.inputUnit + event.key);
  }

  passConversionData(subUnitSelectedOne: string, subUnitSelectedTwo: string, inputValue: any) {
    console.log("units........." + this.unit + "..", this.subUnit);
    if (this.inputValue == null || this.inputValue == 0 || this.inputValue.toString() == "") {
      inputValue = this.textInputValue;
    }
    console.log("Event  ", inputValue);

    console.log("Input " + subUnitSelectedOne + "2ip " + subUnitSelectedTwo + "ipval ", inputValue);
    this.quantityMeasurement.convertData(this.unit.toUpperCase(), this.subUnit.toUpperCase(), inputValue).
      subscribe((res: Response) => {
        this.dataa = res.data;
        console.log("Inside json", this.dataa);
      })
  }

  // passConversionData(subUnitSelectedOne: string, subUnitSelectedTwo: string, inputValue: any) {

  //   const unitConversionDTO = {
  //     "unitTypeOne": subUnitSelectedOne,
  //     "unitTypeSecond": subUnitSelectedTwo,
  //     "value": inputValue

  //   }
  //   this.quantityMeasurement.getConversionResult(unitConversionDTO).
  //     subscribe((res: Response) => {
  //       console.log("Inside response : " + res);
  //       console.log("....................", res.data);
  //       this.dataa = JSON.stringify(res);
  //       console.log("Dataa ", this.dataa);

  //       let response: any = {
  //         "data": ""
  //       }
  //       response = this.dataa;
  //       console.log(response.data);
  //       this.result = 0;

  //       console.log("Inside json", this.result);

  //     })
  // }
}