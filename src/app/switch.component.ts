import { Component, Input } from '@angular/core';

@Component({
  selector: 'switch',
  template: `
  <div class="toggle">
    <input class="toggle-input" type="checkbox" />
    <button class="toggle-btn {{className}}" [ngClass]="{'toggle-btn-on': on, 'toggle-btn-off': !on}" [attr.aria-expanded]="on" ></button>
  </div>
  `
})
export class SwitchComponent {
  @Input()
  on: boolean;
  @Input()
  className: string;
}
