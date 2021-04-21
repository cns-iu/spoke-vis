import { Any } from '@angular-ru/common/typings';
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
  // Any is required here because Angular thinks this sometimes returns null when it doesn't
  readonly spec$: Observable<Any> = this.route.paramMap.pipe(map(p =>
    createSpec({
      source: p.get('disease') || undefined,
      destination: p.get('food') || undefined
    }))
  );

  constructor(private route: ActivatedRoute) { }
}
