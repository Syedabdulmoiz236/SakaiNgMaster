
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotationRetentionComponent } from './rotation-retention.component';
import { RotationRetentionRoutingModule,} from './rotation-retention-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

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
    ],
    declarations:[RotationRetentionComponent]
})
export class RotationRetentionModule{}
