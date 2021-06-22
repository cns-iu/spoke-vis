import { Injectable } from '@angular/core';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';

interface PageStateModel {
  allowTelemetry: boolean | undefined;
}

const LOCAL_STORAGE_ALLOW_TELEMETRY_KEY = 'ALLOW_TELEMETRY';

@StateRepository()
@State<PageStateModel>({
  name: 'page',
  defaults: {
    allowTelemetry: undefined
  }
})
@Injectable()
export class PageState extends NgxsImmutableDataRepository<PageStateModel> {

  @DataAction()
  setAllowTelemetry(allowTelemetry: boolean): void {
    localStorage.setItem(LOCAL_STORAGE_ALLOW_TELEMETRY_KEY, allowTelemetry.toString());
    this.ctx.patchState({ allowTelemetry });
  }

  ngxsOnInit(): void {
    super.ngxsOnInit();
    const allowTelemetry = localStorage.getItem(LOCAL_STORAGE_ALLOW_TELEMETRY_KEY)?.toLowerCase() === undefined;
    this.patchState({ allowTelemetry });
  }
}
