import { ReviewedComponent } from './reviewed.component';
import { DateAndVerComponent } from './dateandver.component';
import { UpdateComponent } from './update.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { RunbookRoutingModule } from './runbook-routing.module';
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
import { CrudRoutingModule } from '../../pages/crud/crud-routing.module';
import { RunbookComponent } from './runbook.component';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
    imports:[
        CommonModule,
        RunbookRoutingModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        PanelMenuModule,
        ButtonModule,
        RouterModule,
        InputTextareaModule,
        RadioButtonModule,
        ReactiveFormsModule,
        CheckboxModule,
        TabMenuModule,
        RouterModule.forChild([
            {path:'', component: RunbookComponent,children:[
                { path: '', redirectTo: 'update', pathMatch: 'full' },
                { path: 'update', component:UpdateComponent },
                {path:'dateandver', component:DateAndVerComponent},
                {path:'reviewed', component:ReviewedComponent}
       

            ]}
        ]) 
    ],
    declarations:[RunbookComponent , UpdateComponent, ReviewedComponent, DateAndVerComponent]
})
export class RunbookModule{}