import { Injectable } from '@angular/core';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';

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

  ngxsOnInit(): void {
    super.ngxsOnInit();
    const allowTelemetry = localStorage.getItem(LOCAL_STORAGE_ALLOW_TELEMETRY_KEY)?.toLowerCase() === 'false';
    this.patchState({ allowTelemetry });
  }

  @DataAction()
  setAllowTelemetry(allowTelemetry: boolean): void {
    localStorage.setItem(LOCAL_STORAGE_ALLOW_TELEMETRY_KEY, allowTelemetry.toString());
    this.ctx.patchState({ allowTelemetry });
  }
}
