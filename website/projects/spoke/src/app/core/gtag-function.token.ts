/* eslint-disable  */
import { InjectionToken } from '@angular/core';
import { DataLayer, getGtagFn, GtagFn } from 'ngx-google-analytics';


export function gtagFunction(): GtagFn {
  const dataLayerContainer = window as unknown as {dataLayer: DataLayer};
  const dataLayer = dataLayerContainer.dataLayer || [];
  dataLayerContainer.dataLayer = dataLayer;

  return (args) => {
    if (localStorage.ALLOW_TELEMETRY !== 'false') {
      const gtag = getGtagFn(window, dataLayer);
      return gtag(args);
    } else {
      return {};
    }
  }
}

export const NGX_GTAG_FN_CUSTOM = new InjectionToken<GtagFn>('ngx-gtag-fn', {
  providedIn: 'root',
  factory: () => gtagFunction()
});
