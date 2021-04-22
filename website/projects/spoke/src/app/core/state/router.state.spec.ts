import { ActivatedRoute, Params, RouterStateSnapshot } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';
import { ActionType, Store } from '@ngxs/store';
import { isObservable, of } from 'rxjs';

import { RouterState } from './router.state';


describe('RouterState', () => {
  let route: jasmine.SpyObj<ActivatedRoute>;
  let store: jasmine.SpyObj<Store>;
  let state: RouterState;

  beforeEach(() => {
    route = jasmine.createSpyObj<ActivatedRoute>(['toString']);
    store = jasmine.createSpyObj<Store>(['select', 'selectSnapshot', 'dispatch']);
    state = new RouterState(route, store);

    store.select.and.returnValue(of());
  });

  describe('name', () => {
    it('has the name "router"', () => {
      expect(state.name).toEqual('router');
    });
  });

  describe('initialState', () => {
    it('is undefined', () => {
      expect(state.initialState).toBeUndefined();
    });
  });

  describe('state$', () => {
    it('is an observable', () => {
      expect(isObservable(state.state$)).toBeTrue();
    });

    it('emits the latest value', () => {
      const data = { current: 'state' };
      const spy = jasmine.createSpy();
      store.select.and.returnValue(of(data));
      state.state$.subscribe({ next: spy });
      expect(spy).toHaveBeenCalledWith(data);
    });
  });

  describe('snapshot', () => {
    it('returns the current value', () => {
      const data = { state: 123 };
      store.selectSnapshot.and.returnValue(data);
      expect(state.snapshot).toEqual(data as unknown as RouterStateSnapshot);
    });
  });

  describe('getState()', () => {
    it('returns the current value', () => {
      const data = { state: 123 };
      store.selectSnapshot.and.returnValue(data);
      expect(state.getState()).toEqual(data as unknown as RouterStateSnapshot);
    });
  });

  describe('dispatch(actions)', () => {
    it('dispatches the actions to the store', () => {
      const action = 'myaction';
      state.dispatch(action as unknown as ActionType);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('reset()', () => {
    it('does nothing', () => {
      state.reset();
      expect(store.select).not.toHaveBeenCalled();
      expect(store.selectSnapshot).not.toHaveBeenCalled();
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });

  describe('navigate(path, params?, extra?)', () => {
    it('dispatches a Navigate action', () => {
      state.navigate([]);
      expect(store.dispatch).toHaveBeenCalledWith(jasmine.any(Navigate));
    });

    it('automatically injects the active route for relativeTo when set to "current"', () => {
      state.navigate([], undefined, { relativeTo: 'current' });

      const action = store.dispatch.calls.first().args[0] as Navigate;
      const relativeTo = action.extras?.relativeTo;

      expect(relativeTo).toBe(route);
    });
  });

  describe('addQueryParams(params)', () => {
    it('navigates with new query parameters', () => {
      const params: Params = { test: 1 };
      spyOn(state, 'navigate');
      state.addQueryParams(params);
      expect(state.navigate).toHaveBeenCalledWith([], params, jasmine.anything());
    });
  });
});
