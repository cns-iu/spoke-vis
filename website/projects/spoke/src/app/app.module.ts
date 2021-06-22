import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackingPopupModule } from './core/components/tracking-popup/tracking-popup.module';
import { CoreModule } from './core/core.module';
import { INITIAL_TELEMETRY_SETTING } from './core/state/page.state';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGoogleAnalyticsModule.forRoot(INITIAL_TELEMETRY_SETTING === false ? '' : environment.googleAnalyticsTag),
    NgxGoogleAnalyticsRouterModule,

    AppRoutingModule,
    CoreModule,
    TrackingPopupModule,
    MatSnackBarModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
