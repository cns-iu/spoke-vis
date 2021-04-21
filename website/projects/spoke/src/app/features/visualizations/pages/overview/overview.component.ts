import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { createSpec } from './overview-visualization.vega';


@Component({
  selector: 'spoke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {
  readonly spec$: Observable<any> = this.route.paramMap.pipe(map(p =>
    createSpec({
      source: p.get('disease') || undefined,
      destination: p.get('food') || undefined
    }))
  );

  constructor(private route: ActivatedRoute) { }
}
