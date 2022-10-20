import { ResourceTrainingComponent } from './resource-training.component';
import { ResourceTrainingRoutingModule } from './resource-training-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@NgModule({
    imports:[
        CommonModule,
        ResourceTrainingRoutingModule,

    ],
    declarations:[ResourceTrainingComponent]
})
export class ResourceTrainingModule{}
