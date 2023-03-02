import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersFinancialComponent } from './others-financial.component';

describe('OthersFinancialComponent', () => {
  let component: OthersFinancialComponent;
  let fixture: ComponentFixture<OthersFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersFinancialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
