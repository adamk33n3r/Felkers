import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PHONE } from 'app/globals';

declare var $: any;
declare var ga: any;

@Component({
  selector: 'felk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public images = [
    'yellow_20x20.png',
    'yellow_20x20.2.png',
  ];
  public images2 = [
    'cover5.png',
    'cover8.jpg',
  ];

  public phone = PHONE;

  constructor() {}

  public ngOnInit() {}

  public ngAfterViewInit() {
    $('#info, #info2').parallax({ imageSrc: '/assets/images/info.png' });
  }

  public sendEvent() {
    ga('send', 'event', 'button', 'click', 'call2');
  }
}
