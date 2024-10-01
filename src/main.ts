import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './main.config';

import { TshirtComponent } from './components/tshirt/tshirt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TshirtComponent
  ],
  template: `
    <app-tshirt>Loading...</app-tshirt>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig);
