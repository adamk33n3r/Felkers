import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PHONE } from 'app/globals';

declare var $: any;
declare var lightbox: any;

@Component({
  selector: 'felk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {
  public phone = PHONE;

  public ngOnInit() {
    lightbox.option({
      disableScrolling: true,
      alwaysShowNavOnTouchDevices: true,
    });
  }

  public ngAfterViewInit() {
    $('.masthead.segment').parallax({ imageSrc: '/assets/images/masthead.png' });
    // $('.masthead.segment').visibility({
    //   once: false,
    //   onBottomPassed: () => {
    //     $('.fixed.menu').transition('fade in');
    //   },
    //   onBottomPassedReverse: () => {
    //     $('.fixed.menu').transition('fade out');
    //   },
    // });
  }
}
