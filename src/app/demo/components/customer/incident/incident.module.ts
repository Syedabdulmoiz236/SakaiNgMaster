import { BacklogComponent } from './backlog.component';
import { ExceedComponent } from './exceed.component';
import { InPerfDbaComponent } from './inperfdba.component';
import { InBarComponent } from './inbar.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentComponent } from './incident.component';
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
        IncidentRoutingModule,
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
            {path:'', component: IncidentComponent,children:[
                { path: '', redirectTo: 'inbar', pathMatch: 'full' },
                { path: 'inbar', component:InBarComponent },
                { path: 'inperfdba', component:InPerfDbaComponent },
                { path: 'exceed', component:ExceedComponent },
                { path: 'backlog', component:BacklogComponent },

            ]}
        ])
        
    
    ],
    declarations:[IncidentComponent , InBarComponent,InPerfDbaComponent,ExceedComponent, BacklogComponent]
    
})
export class IncidentModule{}