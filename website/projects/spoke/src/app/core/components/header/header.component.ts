import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'spoke-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { }
