import { AfterContentInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-tshirt',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './tshirt.component.html',
  styleUrl: './tshirt.component.scss'
})
export class TshirtComponent implements AfterContentInit {

  readonly dialog = inject(MatDialog);

  ngAfterContentInit(): void {
    // console.log('TshirtComponent', 'ngAfterContentInit');  
    // this.openDialog('1000ms','1000ms');
  }
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    // console.log('TshirtComponent', 'openDialog');  
    this.dialog.open(DisplayComponent, {
      width: '550px',
      height: '650px',
      enterAnimationDuration,
      exitAnimationDuration,
      closeOnNavigation: true,
      disableClose: false
    });
  }
}
