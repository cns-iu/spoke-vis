import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vis1Component } from './vis1.component';
import { NgxVegaModule } from 'ngx-vega';


describe('Vis1Component', () => {
  let component: Vis1Component;
  let fixture: ComponentFixture<Vis1Component>;

  beforeEach(waitForAsync(async () => {
    TestBed.configureTestingModule({
      declarations: [ Vis1Component ],
      imports: [ NgxVegaModule ]
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
