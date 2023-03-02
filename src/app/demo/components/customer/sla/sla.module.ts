import { TabMenuModule } from 'primeng/tabmenu';
import { SlaRoutingModule } from './sla-routing.module';
import { SlaComponent } from './sla.component';
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
import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { ComentsResoComponent } from './comentreso.component';
import { ComentsSlaComponent } from './comentsla.component';
import { ReportedComponent } from './reported.component';
import { ResponseSlaComponent } from './responsesla.component';
import { SlaResoulutionComponent } from './slaresoulution.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports:[
        CommonModule,
        SlaRoutingModule,
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
        ReactiveFormsModule,
        CheckboxModule,
        RouterModule.forChild([
            {path:'', component: SlaComponent,children:[
                { path: '', redirectTo: 'reported', pathMatch: 'full' },
                { path: 'reported', component:ReportedComponent },
                { path: 'responsesla', component:ResponseSlaComponent },
                { path: 'comentsla', component:ComentsSlaComponent },
                { path: 'slaresoulution', component:SlaResoulutionComponent },
                { path: 'comentreso', component:ComentsResoComponent },

            ]}
        ])
    
    ],
    declarations:[SlaComponent,ComentsResoComponent, ComentsSlaComponent, ReportedComponent, ResponseSlaComponent, SlaResoulutionComponent]
    
})
export class SlaModule{}