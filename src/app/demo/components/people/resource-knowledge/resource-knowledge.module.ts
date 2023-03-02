import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { PerfdbaComponent } from './perfdba.component';
import { OpsdbaComponent } from './opsdba.component';
import { BarComponent } from './bar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
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
import { EtlComponent } from './etl.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';


@NgModule({
    declarations:[ResourceKnowledgeComponent, BarComponent, OpsdbaComponent, PerfdbaComponent, EtlComponent],
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
        TabMenuModule,
        CheckboxModule,
        ToastModule,
        ConfirmPopupModule,
        RouterModule.forChild([
            {path:'', component: ResourceKnowledgeComponent,children:[
                { path: '', redirectTo: 'bar', pathMatch: 'full' },
                { path: 'bar', component:BarComponent },
                { path: 'opsdba', component:OpsdbaComponent },
                { path: 'perfdba', component:PerfdbaComponent },
                { path: 'etl', component:EtlComponent },

            ]}
        ])




        


        
    ]
})
export class ResourceKnowledgeModule{}