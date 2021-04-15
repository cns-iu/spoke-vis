import { NgModule } from '@angular/core';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { HeaderModule } from './components/header/header.module';
import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    NgxGoogleAnalyticsModule.forRoot(''), // TODO: Add analytics token
    NgxGoogleAnalyticsRouterModule.forRoot({}),

    HeaderModule,
    StateModule,
  ],
  exports: [
    HeaderModule
  ]
})
export class CoreModule { }
