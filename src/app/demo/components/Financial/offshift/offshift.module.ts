import { ReferComponent } from './refer.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { OffshiftRoutingModule } from './offshift-routing.module';
import { OffshiftComponent } from './offshift.component';
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
import { OnCallComponent } from './oncall.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports:[
        CommonModule,
        OffshiftRoutingModule,
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
            {path:'', component: OffshiftComponent,children:[
                { path: '', redirectTo: 'refer', pathMatch: 'full' },
                { path: 'refer', component:ReferComponent },
                { path: 'oncall', component:OnCallComponent },

            ]}
        ])

    
    ],
    declarations:[OffshiftComponent, ReferComponent, OnCallComponent]
})
export class OffshiftModule{}