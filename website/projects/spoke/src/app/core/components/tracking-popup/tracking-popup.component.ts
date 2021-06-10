import { Component, ElementRef, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { fromEvent } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';
import { PageState } from '../../state/page.state';

@Component({
  selector: 'spoke-tracking-popup',
  templateUrl: './tracking-popup.component.html',
  styleUrls: ['./tracking-popup.component.scss']
})
export class TrackingPopupComponent {

  container: HTMLElement;
  ga: GoogleAnalyticsService;

  constructor(elementRef: ElementRef<HTMLElement>, ga: GoogleAnalyticsService, readonly page: PageState, @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.container = elementRef.nativeElement;
    this.ga = ga;
  }

  dismiss() {
    this.page.setHasClosedPopup(true);
    this.data.preClose();
  }

  allow() {
    this.page.setAllowTelemetry(true);
    console.log('allow tracking');
    fromEvent<MouseEvent>(this.container, 'mousemove').pipe(
      throttleTime(1000),
      tap((event) => {
        const label = `${event.clientX}_${event.clientY}_${this.container.clientWidth}_${this.container.clientHeight}`;
        this.ga.event('webpage', 'mousemove', label);
      })
    ).subscribe();
    this.dismiss();
  }

  optOut() {
    this.page.setAllowTelemetry(false);
    console.log('don\'t track');
    this.dismiss();
  }

}
