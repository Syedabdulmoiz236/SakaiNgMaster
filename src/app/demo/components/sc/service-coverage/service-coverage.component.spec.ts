import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCoverageComponent } from './service-coverage.component';

describe('ServiceCoverageComponent', () => {
  let component: ServiceCoverageComponent;
  let fixture: ComponentFixture<ServiceCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCoverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
