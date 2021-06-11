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

  dismiss(): void {
    this.data.preClose();
  }

  submit(entry: boolean): void {
    this.page.setAllowTelemetry(entry);
    this.dismiss();
  }
}
