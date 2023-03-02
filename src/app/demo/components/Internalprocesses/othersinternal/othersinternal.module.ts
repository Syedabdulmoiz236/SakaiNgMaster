import { MonthlyReportComponent } from './../../customer/reporting/monthlyreport.component';
import { CommunicationComponent } from './communication.component';
import { TicketBacklogComponent } from './ticketbacklog.component';
import { RunbookOtherComponent } from './othersrunbook.component';
import { IssuesAndRiskComponent } from './issues&risk.component';
import { ServiceImprovementComponent } from './serviceimprovement.component';
import { SovAndPnlComponent } from './sov&pnl.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { OthersinternalRoutingModule } from './othersinternal-routing.module';
import { OthersinternalComponent } from './othersinternal.component';
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
import { RouterModule } from '@angular/router';
import { OthersMonthlyComponent } from './othersmonthly.component';

@NgModule({
    imports:[
        CommonModule,
        OthersinternalRoutingModule,
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
            {path:'', component: OthersinternalComponent,children:[
                { path: '', redirectTo: 'issuesandrisks', pathMatch: 'full' },
                { path: 'issuesandrisks', component:IssuesAndRiskComponent },
                {path:'serviceimprovement', component:ServiceImprovementComponent},
                {path:'sovandpnl', component:SovAndPnlComponent}
            ]}
        ]) 
    ],
    declarations:[OthersinternalComponent , SovAndPnlComponent,ServiceImprovementComponent,IssuesAndRiskComponent, RunbookOtherComponent, TicketBacklogComponent,CommunicationComponent, OthersMonthlyComponent]
})
export class OthersinternalModule{}