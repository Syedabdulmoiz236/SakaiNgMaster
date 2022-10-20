import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceKnowledgeComponent } from './resource-knowledge.component';

describe('ResourceKnowledgeComponent', () => {
  let component: ResourceKnowledgeComponent;
  let fixture: ComponentFixture<ResourceKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
