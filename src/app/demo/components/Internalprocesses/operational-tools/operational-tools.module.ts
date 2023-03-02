import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { OperationalToolsComponent } from './operational-tools.component';
import { OperationalToolsRoutingModule } from './operational-tools-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { SipComponent } from './sip.component';
import { IraComponent } from './ira.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[
        CommonModule,
        OperationalToolsRoutingModule,
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
        ReactiveFormsModule,
        TabMenuModule,
        CheckboxModule,
        RouterModule.forChild([
            {path:'', component: OperationalToolsComponent,children:[
                { path: '', redirectTo: 'ira', pathMatch: 'full' },
                { path: 'ira', component:IraComponent },
                {path:'sip', component:SipComponent},
              
       

            ]}
        ]) 
    ],
    declarations:[OperationalToolsComponent, SipComponent,IraComponent]
})
export class OperationalToolsModule{}