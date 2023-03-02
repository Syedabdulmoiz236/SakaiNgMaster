import { MessageModule } from 'primeng/message';
import { ApiService } from './../../../api/api.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesDemoRoutingModule } from '../../uikit/messages/messagesdemo-routing.module';
import { MessagesModule } from 'primeng/messages';


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
        RouterModule,
        InputTextareaModule,
        RadioButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MessagesDemoRoutingModule,
        MessagesModule,
        MessageModule,



        


        
    ]
})
export class ResourceKnowledgeModule{}