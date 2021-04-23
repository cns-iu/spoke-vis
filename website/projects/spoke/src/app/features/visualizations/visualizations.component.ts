import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';


@Component({
  selector: 'spoke-visualizations',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.scss']
})
export class VisualizationsComponent {
  drawerOpen = true;

  constructor(private ga: GoogleAnalyticsService) { }

  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
    const label = this.drawerOpen ? 'ui_opened' : 'ui_closed';
    this.ga.event('search_component', 'ui_toggled', label);
  }
}
