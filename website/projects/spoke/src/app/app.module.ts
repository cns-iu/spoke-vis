import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule, NGX_GTAG_FN } from 'ngx-google-analytics';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackingPopupModule } from './core/components/tracking-popup/tracking-popup.module';
import { CoreModule } from './core/core.module';
import { gtagFunction } from './core/gtag-function.token';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.googleAnalyticsTag),
    NgxGoogleAnalyticsRouterModule,

    AppRoutingModule,
    CoreModule,
    TrackingPopupModule,
    MatSnackBarModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [{provide: NGX_GTAG_FN, useFactory: () => gtagFunction()}],
  bootstrap: [AppComponent]
})
export class AppModule { }
