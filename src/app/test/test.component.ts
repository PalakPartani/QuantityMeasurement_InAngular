import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../services/data-service.service'
import { QuantityMeasurementService } from '../services/quantity-measurement.service';
import { ConversionComponent } from '../components/conversion/conversion.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public imgSrc = '../assets/images/CLENGTH.svg';
  public imgSrcTemp = '../assets/images/TEMPERATURE.svg';
  public imgSrcVol = '../assets/images/VOLUME.svg';
  public checkClick = true;
  public selectedBox = 'LENGTH';
  public selectedLen = true;
  public selectedVol = false;
  public selectedTemp = false;
  public temp = true;
  public lengthUnitArray: string[] = ["CM", "FEET", "YARD", "INCH"];
  public tempUnitArray: string[] = ["FAHRENHEIT", "CELSIUS"];
  public VolUnitArray: string[] = ["LITRE", "MILLILITER", "GALLON"];
  public conv;
  constructor(private data: DataServiceService, private quantity: QuantityMeasurementService) { }

  ngOnInit(): void {
    this.conv = new ConversionComponent(this.data, this.quantity);
  }
  selectBox(unit: string) {
    this.selectedBox = unit;
    if (unit == 'TEMPERATURE') {
      this.imgSrcTemp = '../assets/images/hot.svg';
      this.imgSrcVol = '../assets/images/VOLUME.svg';
      this.imgSrc = '../assets/images/LENGTH.svg';
      this.data.changeUnits({ array: this.tempUnitArray });
    }
    else if (unit == 'VOLUME') {
      this.imgSrcVol = '../assets/images/CVOLUME.svg';
      this.imgSrc = '../assets/images/LENGTH.svg';
      this.imgSrcTemp = '../assets/images/TEMPERATURE.svg';
      this.data.changeUnits({ array: this.VolUnitArray });
    }
    else {
      this.imgSrc = '../assets/images/CLENGTH.svg';
      this.imgSrcVol = '../assets/images/VOLUME.svg';
      this.imgSrcTemp = '../assets/images/TEMPERATURE.svg';
      this.data.changeUnits({ array: this.lengthUnitArray });
    }
  }
  mouseOutEvent(unit: string) {
    if (unit === 'TEMPERATURE' && this.selectedBox != 'TEMPERATURE') {
      this.imgSrcTemp = '../assets/images/TEMPERATURE.svg';
    }
    else if (unit === 'VOLUME' && this.selectedBox != 'VOLUME') {
      this.imgSrcVol = '../assets/images/VOLUME.svg';
    }
    else if (unit === 'LENGTH' && this.selectedBox != 'LENGTH') {
      this.imgSrc = '../assets/images/LENGTH.svg';
    }
  }
}