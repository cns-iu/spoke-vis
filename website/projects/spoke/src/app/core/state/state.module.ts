import { NgModule, Type } from '@angular/core';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../../../environments/environment';


/**
 * Root states available to the entire application
 */
const ROOT_STATES: Type<unknown>[] = [
];


@NgModule({
  imports: [
    NgxsModule.forRoot(ROOT_STATES, {
      developmentMode: !environment.production
    }),
    NgxsDataPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),

    /**
     * Switch from NgxsStoragePlugin to @Persistence decorator from NgxsDataPluginModule (requires ngxs-labs/data@5)
     * See: https://github.com/ngxs-labs/data/blob/master/docs/pages/persistence-state.md
     */
    NgxsStoragePluginModule.forRoot({
      key: []
    }),

    /** --- Additional plugins goes here --- */

    /** Logger must be last to capture all events */
    NgxsLoggerPluginModule.forRoot({
      collapsed: true,
      disabled: environment.production
    })
  ]
})
export class StateModule { }
