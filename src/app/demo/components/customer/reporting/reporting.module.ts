import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { MonthlyReportComponent } from './monthlyreport.component';
import { WeeklyReportComponent } from './weeklyreport.component';
import { QuaterlyReportComponent } from './quaterly.component';
import { ReportingComponent } from './reporting.component';
import { ReportingRoutingModule } from './reporting-routing.module';
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
import { AnualReportComponent } from './anual.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports:[
        CommonModule,
        ReportingRoutingModule,
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
            {path:'', component: ReportingComponent,children:[
                { path: '', redirectTo: 'weeklyreport', pathMatch: 'full' },
                { path: 'weeklyreport', component:WeeklyReportComponent },
                { path: 'monthlyreport', component:MonthlyReportComponent },
                { path: 'quaterly', component:QuaterlyReportComponent },
                { path: 'anual', component:AnualReportComponent },

            ]}
        ])
    
    ],
    declarations:[ReportingComponent, AnualReportComponent, QuaterlyReportComponent, WeeklyReportComponent, MonthlyReportComponent]
    
})
export class ReportingModule{}