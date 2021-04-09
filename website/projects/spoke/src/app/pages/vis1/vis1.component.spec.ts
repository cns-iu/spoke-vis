// import { Shallow } from 'shallow-render';

// import { Vis1Component } from './vis1.component';
// import { Vis1ComponentModule } from './vis1.module';

// describe('Vis1Component', () => {
//   let shallow: Shallow<Vis1Component>;

//   beforeEach(() => {
//     shallow = new Shallow(Vis1Component, Vis1ComponentModule);
//   });

//   it('creates the vega spec', async () => {
//     const { instance } = await shallow.render();
//     const spy = spyOn(instance, 'createSpec');
//     expect(spy).toHaveBeenCalled();
//   });
// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vis1Component } from './vis1.component';

describe('ScatterplotComponent', () => {
  let component: Vis1Component;
  let fixture: ComponentFixture<Vis1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vis1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
