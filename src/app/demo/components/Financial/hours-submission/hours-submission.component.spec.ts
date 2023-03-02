import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursSubmissionComponent } from './hours-submission.component';

describe('HoursSubmissionComponent', () => {
  let component: HoursSubmissionComponent;
  let fixture: ComponentFixture<HoursSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoursSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
