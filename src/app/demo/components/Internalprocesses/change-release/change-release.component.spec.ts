import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeReleaseComponent } from './change-release.component';

describe('ChangeReleaseComponent', () => {
  let component: ChangeReleaseComponent;
  let fixture: ComponentFixture<ChangeReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
