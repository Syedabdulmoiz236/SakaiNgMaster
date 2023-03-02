import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnlactualComponent } from './pnlactual.component';

describe('PnlactualComponent', () => {
  let component: PnlactualComponent;
  let fixture: ComponentFixture<PnlactualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnlactualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnlactualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
