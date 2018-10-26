import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <toggle [on]="true" (toggled)="showMessage($event)"></toggle>
  `
})
export class AppComponent {
  showMessage(value) {
    console.log(value);
  }
}
