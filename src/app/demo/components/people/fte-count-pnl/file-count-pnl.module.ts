import { FteCountPnlRoutingModule } from './file-count-pnl-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FteCountPnlComponent } from './fte-count-pnl.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
        FteCountPnlRoutingModule,
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
        ReactiveFormsModule
    ],
    declarations:[FteCountPnlComponent]
})
export class FteCountPnlModule{}

