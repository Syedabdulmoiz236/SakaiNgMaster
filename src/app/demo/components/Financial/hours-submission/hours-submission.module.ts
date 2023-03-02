import { TdmComponent } from './tdm.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { HoursSubmissionRoutingModule } from './hours-submission-routing.module';
import { HoursSubmissionComponent } from './hours-submission.component';
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
import { WeeklyComponent } from './weekly.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports:[
        CommonModule,
        HoursSubmissionRoutingModule,
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
            {path:'', component: HoursSubmissionComponent,children:[
                { path: '', redirectTo: 'weekly', pathMatch: 'full' },
                { path: 'weekly', component:WeeklyComponent },
                { path: 'tdm', component:TdmComponent },

            ]}
        ])
    ],
    declarations:[HoursSubmissionComponent , WeeklyComponent, TdmComponent]

})
export class HoursSubmissionModule{}