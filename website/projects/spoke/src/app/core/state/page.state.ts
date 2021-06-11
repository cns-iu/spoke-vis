import { Injectable } from '@angular/core';
import { Computed, DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface PageStateModel {
  allowTelemetry: boolean;
}

const LOCAL_STORAGE_ALLOW_TELEMETRY_KEY = 'ALLOW_TELEMETRY';

@StateRepository()
@State<PageStateModel>({
  name: 'page',
  defaults: {
    allowTelemetry: false
  }
})
@Injectable()
export class PageState extends NgxsImmutableDataRepository<PageStateModel> {

  @DataAction()
  setAllowTelemetry(allowTelemetry: boolean): void {
    localStorage.setItem(LOCAL_STORAGE_ALLOW_TELEMETRY_KEY, allowTelemetry.toString())
    this.ctx.patchState({ allowTelemetry });
  }
}