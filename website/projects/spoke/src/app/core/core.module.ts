import { NgModule } from '@angular/core';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    NgxGoogleAnalyticsModule.forRoot(''), // TODO: Add analytics token
    NgxGoogleAnalyticsRouterModule.forRoot({}),

    StateModule,

    HeaderModule,
    FooterModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
  ],
  declarations: [
  ]
})
export class CoreModule { }
