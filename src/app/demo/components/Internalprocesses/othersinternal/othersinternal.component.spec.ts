import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersinternalComponent } from './othersinternal.component';

describe('OthersinternalComponent', () => {
  let component: OthersinternalComponent;
  let fixture: ComponentFixture<OthersinternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersinternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersinternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
