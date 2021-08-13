import { Shallow } from 'shallow-render';
import { ElementRef } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { PageState } from '../../state/page.state';

import { TrackingPopupComponent } from './tracking-popup.component';
import { TrackingPopupModule } from './tracking-popup.module';


describe('TrackingPopupComponent', () => {
  let shallow: Shallow<TrackingPopupComponent>;
  const mockPageState = jasmine.createSpyObj<PageState>(['setAllowTelemetry']);

  beforeEach(() => {
    shallow = new Shallow(TrackingPopupComponent, TrackingPopupModule)
      .provide({ provide: ElementRef, useValue: {} })
      .provide({ provide: MAT_SNACK_BAR_DATA, useValue: {} })
      .provide({ provide: PageState, useValue: {} })
      .mock(PageState, {
        ...mockPageState,
        snapshot: {allowTelemetry: undefined}
      })
  });

  it('creates', async () => {
    const { instance } = await shallow.render();
    expect(instance).toBeDefined();
  });
});
