import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';


@Component({
  selector: 'spoke-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private ga: GoogleAnalyticsService) { }

  logClick(siteName: string): void {
    this.ga.event('home_view', 'link_click', siteName);
  }
}
