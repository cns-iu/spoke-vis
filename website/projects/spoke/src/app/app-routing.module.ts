import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/**
 * Turns a kebab case (lower-case-hyphenated) feature name into
 * a Pascal case (UpperCasedFirstLetter) name with a 'Module' suffix added.
 * For routes generated/conforming to our naming convertion the resulting
 * name is the name of the main module exported by the feature.
 *
 * @param feature Kebab case name of feature
 * @returns Pascal case name with a 'Module' suffix
 */
export function moduleNameForFeature(feature: string): string {
  const toUpperCase = (text: string) => text.slice(-1).toUpperCase();
  return feature.replace(/^\w|-\w/g, toUpperCase) + 'Module';
}

/**
 * Creates a callback that when invoked loads the specified feature
 * module in the features directory.
 *
 * @param feature Feature to load
 * @param module Module name if it differce from the standard naming convention
 * @returns The loader callback
 */
/* istanbul ignore next */
export function createFeatureLoader(feature: string, module?: string): () => Promise<unknown> {
  const moduleProp = module ?? moduleNameForFeature(feature);
  return async () => {
    // This uses magic webpack comments
    // See: https://webpack.js.org/api/module-methods/#import-1
    const chunk = await import(
      /* webpackInclude: /\/features\/([^/]+)\/\1\.module/ */
      /* webpackChunkName: "[request]" */
      `./features/${feature}/${feature}.module`
    );

    return chunk?.[moduleProp];
  };
}


/**
 * Root routes
 */
const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    loadChildren: createFeatureLoader('home')
  },
  {
    path: 'visualization',
    loadChildren: createFeatureLoader('visualizations')
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
