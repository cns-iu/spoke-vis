import { RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { RecursivePartial, Shallow } from 'shallow-render';

import { RouterState } from '../../../../core/state/router.state';
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
      });
  });

  describe('spec$', () => {
    it('creates specs with the current disease and food', async () => {
      const disease = 'flu';
      const food = 'pasta';
      const { instance } = await shallow.render();

      spyOn(instance, 'createSpec');
      routerState.next({ root: { queryParams: { disease, food } } });

      expect(instance.createSpec).toHaveBeenCalledWith({ source: disease, destination: food });
    });
  });
});
