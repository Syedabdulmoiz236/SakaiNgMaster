import { PerPnlCountComponent } from './perpnl.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PerfDbaaCountComponent } from './perfdba.component';
import { OpsDbaTwoComponent } from './opsdbatwo.component';
import { OpsDbaOneComponent } from './opsdbaone.component';
import { ActualHeadCountComponent } from './actualheadcount.component';
import { PnlActualRoutingModule } from './pnl-routing.module';
import { NgModule } from '@angular/core';
import { PnlactualComponent } from './pnlactual.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
@NgModule({
    imports:[
        CommonModule,
        PnlActualRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TabMenuModule,
        CheckboxModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path:'', component: PnlactualComponent,children:[
                { path: '', redirectTo: 'perpnl', pathMatch: 'full' },
                { path: 'perpnl', component:PerPnlCountComponent },
                { path: 'opsdba-one', component:OpsDbaOneComponent },
                { path: 'opsdba-two', component:OpsDbaOneComponent },
                { path: 'perfdbaa', component:PerfDbaaCountComponent },
                { path: 'actual-headcount', component:ActualHeadCountComponent },
              
       

            ]}
        ])
    
    ],
    declarations:[PnlactualComponent , ActualHeadCountComponent, OpsDbaOneComponent,OpsDbaTwoComponent, PerfDbaaCountComponent, PerPnlCountComponent]
})
export class PnlActualModule{}