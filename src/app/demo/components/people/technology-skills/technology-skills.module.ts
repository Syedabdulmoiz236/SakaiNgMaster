import { HttpClient } from '@angular/common/http';
import { TsEtlComponent } from './tsetl.component';
import { TsPerfdbaComponent } from './tsperfdba.component';
import { TsOpsdbaComponent } from './tsopsdba.component';
import { TsBarComponent } from './tsbar.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologySkillsRoutingModule } from './technology-skills-routing.module';
import { TechnologySkillsComponent } from './technology-skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
    imports:[
        TechnologySkillsRoutingModule,
        TabMenuModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        PanelMenuModule,
        ButtonModule,
        RouterModule,
        InputTextareaModule,
        RadioButtonModule,
        CheckboxModule,
        RouterModule.forChild([
            {path:'', component: TechnologySkillsComponent,children:[
                { path: '', redirectTo: 'tsbar', pathMatch: 'full' },
                { path: 'tsbar', component:TsBarComponent },
                { path: 'tsopsdba', component:TsOpsdbaComponent },
                { path: 'tsperfdba', component:TsPerfdbaComponent },
                { path: 'tsetl', component:TsEtlComponent },

            ]}
        ])
    ],
      declarations: [ TechnologySkillsComponent, TsBarComponent,TsEtlComponent,TsOpsdbaComponent,TsPerfdbaComponent]

})
export class TechnologySkillsModule{
    
}