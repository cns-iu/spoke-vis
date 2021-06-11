import { Component, ElementRef, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { PageState } from '../../state/page.state';

@Component({
  selector: 'spoke-tracking-popup',
  templateUrl: './tracking-popup.component.html',
  styleUrls: ['./tracking-popup.component.scss']
})
export class TrackingPopupComponent {

  container: HTMLElement;

  constructor(elementRef: ElementRef<HTMLElement>, readonly page: PageState, @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.container = elementRef.nativeElement;
  }

  dismiss() {
    this.page.setHasClosedPopup(true);
    this.data.preClose();
  }

  allow() {
    this.page.setAllowTelemetry(true);
    console.log('allow tracking');
    this.dismiss();
  }

  optOut() {
    this.page.setAllowTelemetry(false);
    console.log('don\'t track');
    this.dismiss();
  }

}
