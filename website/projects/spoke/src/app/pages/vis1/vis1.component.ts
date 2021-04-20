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

  ready = false;

  ngAfterViewInit(): void {
    this.updateSpec();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes')
    if ('disease' in changes || 'food' in changes) {
      this.updateSpec();
    }
  }

  toggleDisease(): void {
    this.disease = this.disease ? undefined : "alzheimers";
    console.log(this.disease)
    this.ready = this.disease && this.food ? true : false;
  }

  toggleFood(): void {
    this.food = this.food ? undefined : "Hot chocolate";
    console.log(this.food)
    this.ready = this.disease && this.food ? true : false;
  }

  updateSpec(): void {
    if (!this.disease || !this.food ) {
      this.spec = createOverviewSpec();
    } else {
      this.spec = createSpec(this.disease, this.food);
    }
  }
};
