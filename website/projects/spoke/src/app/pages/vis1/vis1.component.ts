import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

import { Spec } from 'ngx-vega';
import { createSpec, createOverviewSpec, vis1Spec } from './vis1.vega';


@Component({
  selector: 'spoke-vis1',
  templateUrl: './vis1.component.html'
})
export class Vis1Component implements AfterViewInit, OnChanges {

  @Input() spec?: Spec = vis1Spec;

  @Input() disease?: string;
  @Input() food?: string;

  ngAfterViewInit(): void {
    this.updateSpec();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('disease' in changes || 'food' in changes) { 
      this.updateSpec(); 
    }
  }

  updateSpec(): void {
    if (!this.disease || !this.food ) {
      this.spec = createOverviewSpec();
    } else {
      this.spec = createSpec(this.disease, this.food);
    }
  }
};
