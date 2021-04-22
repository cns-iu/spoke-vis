import { Component, ElementRef } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { fromEvent } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';


@Component({
  selector: 'spoke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(elementRef: ElementRef<HTMLElement>, ga: GoogleAnalyticsService) {
    const container = elementRef.nativeElement;
    fromEvent<MouseEvent>(container, 'mousemove').pipe(
      throttleTime(1000),
      tap((event) => {
        const label = `${event.clientX}_${event.clientY}_${container.clientWidth}_${container.clientHeight}`;
        ga.event('webpage', 'mousemove', label);
      })
    ).subscribe();
  }
}
