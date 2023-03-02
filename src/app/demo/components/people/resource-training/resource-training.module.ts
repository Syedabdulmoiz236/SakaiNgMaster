import { RtEtlComponent } from './rtetl.component';
import { RtPerfdbaComponent } from './rtperfdba.component';
import { RtOpsdbaComponent } from './rtopsdba.component';
import { RtBarComponent } from './rtbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { EtlComponent } from './../resource-knowledge/etl.component';
import { PerfdbaComponent } from './../resource-knowledge/perfdba.component';
import { OpsdbaComponent } from './../resource-knowledge/opsdba.component';
import { BarComponent } from './../resource-knowledge/bar.component';
import { ResourceTrainingComponent } from './resource-training.component';
import { ResourceTrainingRoutingModule } from './resource-training-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

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
        CheckboxModule,
        TabMenuModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path:'', component: ResourceTrainingComponent,children:[
                { path: '', redirectTo: 'rtbar', pathMatch: 'full' },
                { path: 'rtbar', component:RtBarComponent },
                { path: 'rtopsdba', component:RtOpsdbaComponent },
                { path: 'rtperfdba', component:RtPerfdbaComponent },
                { path: 'rtetl', component:RtEtlComponent },

            ]}
        ])
        
    

    ],
    declarations:[ResourceTrainingComponent , RtBarComponent, RtEtlComponent, RtOpsdbaComponent,RtPerfdbaComponent]
})
export class ResourceTrainingModule{}
