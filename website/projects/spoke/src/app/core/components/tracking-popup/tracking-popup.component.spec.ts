import { Shallow } from 'shallow-render';
import { ElementRef } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { PageState } from '../../state/page.state';

import { TrackingPopupComponent } from './tracking-popup.component';
import { TrackingPopupModule } from './tracking-popup.module';


describe('TrackingPopupComponent', () => {
  let shallow: Shallow<TrackingPopupComponent>;

  beforeEach(() => {
    shallow = new Shallow(TrackingPopupComponent, TrackingPopupModule)
      .provide({ provide: ElementRef, useValue: {} })
      .provide({ provide: MAT_SNACK_BAR_DATA, useValue: {} })
      .provide({ provide: PageState, useValue: {} });
  });

  it('passes the dummy test', () => {
    expect().nothing();
  });

  // it('should dismiss the snackbar', async () => {
  //   const { instance, get } = await shallow.mock(MAT_SNACK_BAR_DATA, { preClose(): void { } }).render();
  //   const ref = get(MAT_SNACK_BAR_DATA);
  //   instance.dismiss();
  //   expect(ref.preClose).toHaveBeenCalled();
  // });
});
