import { Immutable } from '@angular-ru/common/typings';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';
import { VisualizationSpec } from 'vega-embed';

import { RouterState } from '../../../../core/state/router.state';
import { createSpec } from './overview-visualization.vega';


@Component({
  selector: 'spoke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {
  readonly spec$: Observable<VisualizationSpec>;

  constructor(router: RouterState) {
    this.spec$ = router.state$.pipe(
      filter((value): value is Immutable<RouterStateSnapshot> => !!value),
      pluck('root', 'queryParams'),
      map(({ disease, food }) => createSpec({ source: disease, destination: food }))
    );
  }
}
