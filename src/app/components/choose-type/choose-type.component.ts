import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.scss']
})
export class ChooseTypeComponent implements OnInit {

  public imgSrc = '../assets/images/CLENGTH.svg';
  public imgSrcTemp = '../assets/images/TEMPERATURE.svg';
  public imgSrcVol = '../assets/images/VOLUME.svg';
  public checkClick = true;
  public selectedBox = '';
  public s = true;

  constructor() { }

  ngOnInit(): void {
  }

}
