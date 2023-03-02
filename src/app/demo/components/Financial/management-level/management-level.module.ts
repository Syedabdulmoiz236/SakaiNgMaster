import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { MOpsComponent } from './m.ops.component';
import { MBarComponent } from './mbar.component';
import { ManagementLevelComponent } from './management-level.component';
import { ManagementLevelRoutingModule } from './management-level-routing.module';
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
import { MPerfComponent } from './mperf.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports:[
        CommonModule,
        ManagementLevelRoutingModule,
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
            {path:'', component: ManagementLevelComponent,children:[
                { path: '', redirectTo: 'mbar', pathMatch: 'full' },
                { path: 'mbar', component:MBarComponent },
                { path: 'mops', component:MOpsComponent },
                { path: 'mperf', component:MPerfComponent },

            ]}
        ])
 
    ],
    declarations:[ManagementLevelComponent , MBarComponent,MOpsComponent,MPerfComponent]
})
export class ManagementLevelModule{}