import { MenuModule } from 'primeng/menu';
import { SlaBreachesComponent } from './slabreaches.component';
import { ServicedeliveryComponent } from './servicedelivery.component';
import { SemComponent } from './sem.component';
import { RegionalComponent } from './regional.component';
import { PenaltyComponent } from './penalty.component';
import { ExclationsComponent } from './exclations.component';
import { DeliveryComponent } from './delivery.component';
import { CheckComponent } from './check.component';
import { ApplicationComponent } from './application.component';
import { AggregateComponent } from './aggregate.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { CothersComponent } from './cothers.component';
import { COthersRoutingModule } from './cothers-routing.module';
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
import { ScrollerModule } from 'primeng/scroller';
import { StepsModule } from 'primeng/steps';
@NgModule({
    imports:[
        CommonModule,
        COthersRoutingModule,
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
        ScrollerModule,
        StepsModule,
        MenuModule,
        RouterModule.forChild([
            {path:'', component: CothersComponent,children:[
                { path: '', redirectTo: 'exclation', pathMatch: 'full' },
                { path: 'exclation', component:ExclationsComponent },
                { path: 'appreciations', component:ApplicationComponent },
                { path: 'sem', component:SemComponent },
                { path: 'delivery', component:DeliveryComponent },
                { path: 'aggregate', component:AggregateComponent },
                { path: 'check', component:CheckComponent },
                { path: 'servicedelivery', component:ServicedeliveryComponent },
                { path: 'slabreaches', component:SlaBreachesComponent },
                { path: 'penalty', component:PenaltyComponent },
                { path: 'regional', component:RegionalComponent },

            ]}
        ])
    ],
    declarations:[CothersComponent, AggregateComponent,ApplicationComponent,CheckComponent,DeliveryComponent,ExclationsComponent,PenaltyComponent,RegionalComponent,SemComponent,ServicedeliveryComponent,SlaBreachesComponent]
    
})
export class COthersModule{}