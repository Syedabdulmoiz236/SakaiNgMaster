import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationRetentionComponent } from './rotation-retention.component';

describe('RotationRetentionComponent', () => {
  let component: RotationRetentionComponent;
  let fixture: ComponentFixture<RotationRetentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotationRetentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotationRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
