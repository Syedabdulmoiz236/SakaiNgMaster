import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTrainingComponent } from './resource-training.component';

describe('ResourceTrainingComponent', () => {
  let component: ResourceTrainingComponent;
  let fixture: ComponentFixture<ResourceTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
