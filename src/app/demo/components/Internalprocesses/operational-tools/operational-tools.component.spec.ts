import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalToolsComponent } from './operational-tools.component';

describe('OperationalToolsComponent', () => {
  let component: OperationalToolsComponent;
  let fixture: ComponentFixture<OperationalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
