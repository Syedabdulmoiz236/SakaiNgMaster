import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovationAutomationComponent } from './inovation-automation.component';

describe('InovationAutomationComponent', () => {
  let component: InovationAutomationComponent;
  let fixture: ComponentFixture<InovationAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InovationAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InovationAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
