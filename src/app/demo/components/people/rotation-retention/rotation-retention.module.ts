import { RrPerfdbaComponent } from './perfdba.component';
import { RrOpsdbaComponent } from './opsdba.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotationRetentionComponent } from './rotation-retention.component';
import { RotationRetentionRoutingModule,} from './rotation-retention-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { RrResignationComponent } from './resignation.component';

@NgModule({
    imports:[
        RotationRetentionRoutingModule,
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
        TabMenuModule,
        CheckboxModule,
        RouterModule.forChild([
            {path:'', component: RotationRetentionComponent,children:[
                { path: '', redirectTo: 'rtbar', pathMatch: 'full' },
                { path: 'rrresignation', component: RrResignationComponent },
                { path: 'rropsdba', component:RrOpsdbaComponent },
                { path: 'rrperfdba', component:RrPerfdbaComponent },

            ]}
        ])
    ],
    declarations:[RotationRetentionComponent, RrResignationComponent, RrOpsdbaComponent,RrPerfdbaComponent]
})
export class RotationRetentionModule{}
