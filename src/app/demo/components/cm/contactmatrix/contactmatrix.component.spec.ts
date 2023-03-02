import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmatrixComponent } from './contactmatrix.component';

describe('ContactmatrixComponent', () => {
  let component: ContactmatrixComponent;
  let fixture: ComponentFixture<ContactmatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
