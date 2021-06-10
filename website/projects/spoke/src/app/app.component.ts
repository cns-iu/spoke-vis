import { Component, ElementRef, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { fromEvent } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';
import { PageState } from './core/state/page.state';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TrackingPopupComponent } from './core/components/tracking-popup/tracking-popup.component';

@Component({
  selector: 'spoke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    if (localStorage['POPUP_CLOSED'] === 'false') {
    // if (true) {
      const snackBar = this.snackbar.openFromComponent(TrackingPopupComponent, {
        data: {preClose: () => {snackBar.dismiss()} }
      });
    }
  }

  constructor(elementRef: ElementRef<HTMLElement>, ga: GoogleAnalyticsService, readonly page: PageState, readonly snackbar: MatSnackBar) {
    const container = elementRef.nativeElement;

    if (localStorage['ALLOW_TELEMETRY'] !== 'false') {
      console.log('allow tracking');
      fromEvent<MouseEvent>(container, 'mousemove').pipe(
        throttleTime(1000),
        tap((event) => {
          const label = `${event.clientX}_${event.clientY}_${container.clientWidth}_${container.clientHeight}`;
          ga.event('webpage', 'mousemove', label);
        })
      ).subscribe();
    } else {
      console.log('don\'t track');
    }
  }
}
