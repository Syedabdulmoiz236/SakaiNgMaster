import { OthersRoutingModule } from './others-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersComponent } from './others.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { MessagesDemoRoutingModule } from '../../uikit/messages/messagesdemo-routing.module';

@NgModule({
    imports:[ 
        CommonModule,
        OthersRoutingModule,
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
        HttpClientModule,
        MessagesDemoRoutingModule,
        MessagesModule,
        MessageModule,
     ],
     declarations:[OthersComponent]
})
export class OthersModule{}