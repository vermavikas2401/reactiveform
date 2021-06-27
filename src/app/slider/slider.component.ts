import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliderArr =['https://via.placeholder.com/1200x500.png?text=Slide1',
            'https://via.placeholder.com/1200x500.png?text=Slide2',
            'https://via.placeholder.com/1200x500.png?text=Slide3',
            'https://via.placeholder.com/1200x500.png?text=Slide4']

}
