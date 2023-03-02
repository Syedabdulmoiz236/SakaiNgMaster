import { UtPerfComponent } from './utperf.component';
import { UtBarComponent } from './utbar.component';
import { UtOpsComponent } from './utops.component';
import { BilableComponent } from './bilable-hours.component';
import { FteComponent } from './fte.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { UtilizationRoutingModule } from './uzilization-routing.module';
import { UtilizationComponent } from './utilization.component';
import { NgModule } from '@angular/core';
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
import { RouterModule } from '@angular/router';
@NgModule({
    imports:[
        CommonModule,
        UtilizationRoutingModule,
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
            {path:'', component: UtilizationComponent,children:[
                { path: '', redirectTo: 'perpnl', pathMatch: 'full' },
                { path: 'fte', component:FteComponent },
                { path: 'bilable', component:BilableComponent },
                { path: 'utops', component:UtOpsComponent },
                { path: 'utbar', component:UtBarComponent },
                { path: 'utperf', component:UtPerfComponent},
              
       

            ]}
        ])
    
    ],
    declarations:[UtilizationComponent , FteComponent, BilableComponent,UtOpsComponent, UtPerfComponent,UtBarComponent]
    
})
export class UtilizationModule{}