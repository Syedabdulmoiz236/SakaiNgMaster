import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshiftComponent } from './offshift.component';

describe('OffshiftComponent', () => {
  let component: OffshiftComponent;
  let fixture: ComponentFixture<OffshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffshiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
