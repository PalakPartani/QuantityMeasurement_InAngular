import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  control = new FormControl();
  units: string[] = ['Yard', 'Inch', 'CM', 'Meter'];
  u: string[];
  filteredUnits: Observable<string[]>;

  constructor(private data: DataServiceService) { }

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

  // private _filter(value: string): string[] {
  //   const filterValue = this._normalizeValue(value);
  //   console.log("Inside filter " + filterValue);

  //   return this.units.filter(unit => this._normalizeValue(unit).includes(filterValue));
  // }

  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }

}