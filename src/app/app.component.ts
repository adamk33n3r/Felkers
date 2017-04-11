import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'felk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'felk works!';
  public ngOnInit() {
    const f = $('#fixed-menu');
    console.log(f.visibility);
    // f.visibility({
    //   type: 'fixed',
    //   offset: 15,
    // });
  }
}
