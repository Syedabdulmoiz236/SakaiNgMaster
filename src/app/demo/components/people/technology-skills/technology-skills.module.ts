import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologySkillsRoutingModule } from './technology-skills-routing.module';
import { TechnologySkillsComponent } from './technology-skills.component';

@NgModule({
    imports:[
        CommonModule,
        TechnologySkillsRoutingModule
    ],
      declarations: [ TechnologySkillsComponent ]

})
export class TechnologySkillsModule{
    
}