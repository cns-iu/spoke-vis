import { Injectable } from '@angular/core';
import { Computed, DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface PageStateModel {
  hasClosedPopup: boolean;
  allowTelemetry: boolean;
}

const LOCAL_STORAGE_POPUP_CLOSED_KEY = 'POPUP_CLOSED';
const LOCAL_STORAGE_ALLOW_TELEMETRY_KEY = 'ALLOW_TELEMETRY';

@StateRepository()
@State<PageStateModel>({
  name: 'page',
  defaults: {
    hasClosedPopup: false,
    allowTelemetry: false
  }
})
@Injectable()
export class PageState extends NgxsImmutableDataRepository<PageStateModel> {
  @Computed()
  get hasClosedPopup$(): Observable<boolean> {
    return this.state$.pipe(pluck('hasClosedPopup'));
  }

  ngxsOnInit(): void {
    super.ngxsOnInit();
  }

  @DataAction()
  setHasClosedPopup(hasClosedPopup: boolean): void {
    localStorage.setItem(LOCAL_STORAGE_POPUP_CLOSED_KEY, hasClosedPopup.toString());
    this.ctx.patchState({ hasClosedPopup });
  }

  setAllowTelemetry(allowTelemetry: boolean): void {
    localStorage.setItem(LOCAL_STORAGE_ALLOW_TELEMETRY_KEY, allowTelemetry.toString())
    this.ctx.patchState({ allowTelemetry });
  }
}