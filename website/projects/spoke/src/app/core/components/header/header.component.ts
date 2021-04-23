import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';


@Component({
  selector: 'spoke-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private ga: GoogleAnalyticsService) { }

  logClick(siteName: string): void {
    this.ga.event('header_view', 'link_click', siteName);
  }

  setMenuOpen(value: boolean): void {
    this.menuOpen = value;
    const label = value ? 'menu_opened' : 'menu_closed';
    this.ga.event('header_view', 'menu_toggled', label);
  }
}
