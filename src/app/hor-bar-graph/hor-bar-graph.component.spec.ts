/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HorBarGraphComponent } from './hor-bar-graph.component';

describe('HorBarGraphComponent', () => {
  let component: HorBarGraphComponent;
  let fixture: ComponentFixture<HorBarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorBarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
