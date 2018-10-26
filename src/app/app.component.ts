import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <toggle (toggle)="onToggle($event)">
	  <toggle-button></toggle-button>
	  <toggle-on>On</toggle-on>
	  <toggle-off>Off</toggle-off>
  </toggle>
  `
})
export class AppComponent {
  showMessage(value) {
    console.log(value);
  }
}
