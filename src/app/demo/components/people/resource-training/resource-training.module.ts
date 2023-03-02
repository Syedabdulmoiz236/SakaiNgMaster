import { ResourceTrainingComponent } from './resource-training.component';
import { ResourceTrainingRoutingModule } from './resource-training-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
    imports:[
        ResourceTrainingRoutingModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        PanelMenuModule,
        ButtonModule,
        RouterModule,
        InputTextareaModule,
        RadioButtonModule,

    ],
    declarations:[ResourceTrainingComponent]
})
export class ResourceTrainingModule{}
