import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockForm } from './rock-form';

describe('RockForm', () => {
  let component: RockForm;
  let fixture: ComponentFixture<RockForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RockForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
