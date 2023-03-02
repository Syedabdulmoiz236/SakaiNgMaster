import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologySkillsRoutingModule } from './technology-skills-routing.module';
import { TechnologySkillsComponent } from './technology-skills.component';
import { FormsModule } from '@angular/forms';
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
    ],
      declarations: [ TechnologySkillsComponent ]

})
export class TechnologySkillsModule{
    
}