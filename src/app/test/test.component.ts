import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service'
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
  public selectedBox = '';
  public selectedLen = true;
  public selectedVol = false;
  public selectedTemp = false;
  public temp = true;
  public lengthUnitArray: string[] = ["CM", "Meter", "Yard", "Inch"];
  public tempUnitArray: string[] = ["Fahrenheit", "Celcius"];
  public VolUnitArray: string[] = ["Litre", "ML", "Gallon"];


  constructor(private data: DataServiceService) { }

  ngOnInit(): void {
  }

  activeBox() {
    console.log("Inside method");
  }

  selectBox(unit: string) {

    this.selectedBox = unit;
    console.log("selected unit", unit);
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
    // alert("Inside" + this.selectedBox);
  }

  mouseOutEvent(unit: string) {
    console.log("sel" + this.selectedBox);
    console.log(unit === 'TEMPERATURE' && this.selectedBox != 'TEMPERATURE');
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

