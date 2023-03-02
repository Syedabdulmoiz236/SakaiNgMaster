import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CothersComponent } from './cothers.component';

describe('CothersComponent', () => {
  let component: CothersComponent;
  let fixture: ComponentFixture<CothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CothersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
