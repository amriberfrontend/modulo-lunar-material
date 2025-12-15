import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockView } from './rock-view';

describe('RockView', () => {
  let component: RockView;
  let fixture: ComponentFixture<RockView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RockView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
