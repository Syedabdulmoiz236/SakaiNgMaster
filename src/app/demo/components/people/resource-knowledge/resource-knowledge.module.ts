import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { ResourceKnowledgeRoutingModule } from './resource-knowledge-routing.module';
import { ResourceKnowledgeComponent } from './resource-knowledge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[ResourceKnowledgeComponent],
    imports:[
        ResourceKnowledgeRoutingModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        PanelMenuModule,
        ButtonModule,
        InputTextareaModule,
    ]
})
export class ResourceKnowledgeModule{}