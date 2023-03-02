import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsoperationsComponent } from './msoperations.component';

describe('MsoperationsComponent', () => {
  let component: MsoperationsComponent;
  let fixture: ComponentFixture<MsoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsoperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
