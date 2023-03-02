import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunbookComponent } from './runbook.component';

describe('RunbookComponent', () => {
  let component: RunbookComponent;
  let fixture: ComponentFixture<RunbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
