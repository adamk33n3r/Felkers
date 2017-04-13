import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'felk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public images = [
    'yellow_20x20.png',
    'yellow_20x20.2.png',
    'cover5.png',
    'cover8.jpg',
  ];
  constructor() {}

  ngOnInit() {
  }
}
