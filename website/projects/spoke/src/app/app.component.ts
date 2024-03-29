import { Component, ElementRef, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { fromEvent } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';
import { TrackingPopupComponent } from './core/components/tracking-popup/tracking-popup.component';
import { PageState } from './core/state/page.state';


@Component({
  selector: 'spoke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(elementRef: ElementRef<HTMLElement>, ga: GoogleAnalyticsService, readonly page: PageState, readonly snackbar: MatSnackBar) {
    const container = elementRef.nativeElement;
    fromEvent<MouseEvent>(container, 'mousemove').pipe(
      throttleTime(1000),
      tap((event) => {
        const label = `${event.clientX}_${event.clientY}_${container.clientWidth}_${container.clientHeight}`;
        ga.event('webpage', 'mousemove', label);
      })
    ).subscribe();
  }

  ngOnInit(): void {
    const snackBar = this.snackbar.openFromComponent(TrackingPopupComponent, {
      data: {preClose: () => {snackBar.dismiss();} },
      duration: this.page.snapshot.allowTelemetry === undefined ? Infinity : 3000
    });
  }
}
