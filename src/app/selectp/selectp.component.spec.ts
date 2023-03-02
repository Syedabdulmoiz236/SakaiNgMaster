import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpComponent } from './selectp.component';

describe('SelectpComponent', () => {
  let component: SelectpComponent;
  let fixture: ComponentFixture<SelectpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
