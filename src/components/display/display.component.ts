import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-display',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit, OnDestroy {

  readonly dialogRef = inject(MatDialogRef<DisplayComponent>);
  carousel!: NodeJS.Timeout

  images = [
    'https://alambradofc.com.br/cdn/shop/files/27_4cc493f6-f5b9-44b8-9d70-bfd2f4e7eae0_720x.png?v=1726090033', 
    'https://alambradofc.com.br/cdn/shop/files/18_f3c43cba-69c6-4053-b6ee-c538d70d2c03_720x.png?v=1726088301', 
    'https://alambradofc.com.br/cdn/shop/products/58_b469607c-b915-496c-b8f7-fec1325cae7b_900x.png?v=1677161514'
  ];

  selected = new FormControl(0);
  
  ngOnInit(): void {
    // console.log('DisplayComponent', 'ngOnInit');
    let index = 0
    this.carousel = setInterval(() => {
      index = (this.images.length > (index+1))?(index+1):(0);
      // console.log('DisplayComponent', 'carrousel', index);
      this.selected.setValue(index);
    }, 5000);
  }

  ngOnDestroy(): void {
    // console.log('DisplayComponent', 'ngOnDestroy');    
    clearInterval(this.carousel);
  }
}
