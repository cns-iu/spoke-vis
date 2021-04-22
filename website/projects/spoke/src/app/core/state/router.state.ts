import { Immutable } from '@angular-ru/common/typings';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras as BaseNavigationExtras, Params, RouterStateSnapshot } from '@angular/router';
import { Navigate, RouterState as RawRouterState } from '@ngxs/router-plugin';
import { ActionType, Store } from '@ngxs/store';
import { Observable } from 'rxjs';


/**
 * Same as @angular/router:NavigationExtras,
 * but accepts a broader set of values for some properties
 */
export interface NavigationExtras extends Omit<BaseNavigationExtras, 'relativeTo'> {
  /**
   * Route to navigate relative to.
   * Also accepts the value 'current' to automatically inject the current route.
   */
  relativeTo?: ActivatedRoute | 'current' | null;
}


/**
 * Wrapper for @ngxs/router-plugin:RouterState
 * Implements much of the same interface as @ngxs-labs/data:AbstractRepository
 */
@Injectable()
export class RouterState {
  /**
   * State name
   */
  readonly name = 'router';

  /**
   * Default state value
   */
  readonly initialState = undefined;

  /**
   * State datastream
   */
  get state$(): Observable<Immutable<RouterStateSnapshot | undefined>> {
    return this.store.select(RawRouterState.state);
  }

  /**
   * Current state value
   */
  get snapshot(): Immutable<RouterStateSnapshot | undefined> {
    return this.store.selectSnapshot(RawRouterState.state);
  }

  /**
   * Initializes the state
   *
   * @param route The currently active route
   * @param store The global state store
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) { }

  /**
   * Gets the current state
   *
   * @returns The current state
   */
  getState(): Immutable<RouterStateSnapshot | undefined> {
    return this.snapshot;
  }

  /**
   * Dispatches one or more actions on the store
   *
   * @param actions Actions to dispatch
   * @returns An observable that completes when the actions have been dispatched
   */
  dispatch(actions: ActionType | ActionType[]): Observable<void> {
    return this.store.dispatch(actions);
  }

  /**
   * Resets the router state
   */
  reset(): void {
    // Intentionally blank
  }

  /**
   * Navigate to a new url
   *
   * @param path Url path segments
   * @param queryParams Query parameters
   * @param extras Additional options
   */
  navigate(path: unknown[], queryParams?: Params, extras: NavigationExtras = {}): void {
    const relativeTo = extras.relativeTo === 'current' ? this.route : extras.relativeTo;
    this.store.dispatch(new Navigate(path, queryParams, { ...extras, relativeTo }));
  }

  /**
   * Adds and updates query parameters for the current route
   *
   * @param queryParams Parameters to add and update
   */
  addQueryParams(queryParams: Params): void {
    this.navigate([], queryParams, {
      relativeTo: 'current',
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true
    });
  }
}
