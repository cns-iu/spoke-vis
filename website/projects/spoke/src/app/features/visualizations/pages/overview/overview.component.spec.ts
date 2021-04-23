import { RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { RecursivePartial, Shallow } from 'shallow-render';

import { RouterState } from '../../../../core/state/router.state';
import { DatasetState } from '../../state/dataset.state';
import { OverviewComponent } from './overview.component';
import { OverviewModule } from './overview.module';


describe('OverviewComponent', () => {
  let routerState: Subject<RecursivePartial<RouterStateSnapshot>>;
  let shallow: Shallow<OverviewComponent>;

  beforeEach(() => {
    routerState = new Subject();
    shallow = new Shallow(OverviewComponent, OverviewModule)
      .mock(RouterState, {
        state$: routerState as Subject<RouterStateSnapshot>
      })
      .mock(DatasetState, { });
  });

  it('creates', async () => {
    const { instance } = await shallow.render();
    expect(instance).toBeDefined();
  });
});
