import { RouterModule } from '@angular/router';
import { ResourceTrainingComponent } from './resource-training/resource-training.component';
import { ResourceKnowledgeComponent } from './resource-knowledge/resource-knowledge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { ButtonModule } from 'primeng/button';






@NgModule({
  declarations: [     
  
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    RouterModule,
    ButtonModule,


  
  ]
})
export class PeopleModule { }
