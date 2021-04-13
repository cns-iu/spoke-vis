import { NgModule } from '@angular/core';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    NgxGoogleAnalyticsModule.forRoot(''),
    NgxGoogleAnalyticsRouterModule.forRoot({}),

    StateModule
  ],
  exports: []
})
export class CoreModule { }
