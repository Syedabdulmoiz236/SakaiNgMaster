import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteCountPnlComponent } from './fte-count-pnl.component';

describe('FteCountPnlComponent', () => {
  let component: FteCountPnlComponent;
  let fixture: ComponentFixture<FteCountPnlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteCountPnlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FteCountPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
