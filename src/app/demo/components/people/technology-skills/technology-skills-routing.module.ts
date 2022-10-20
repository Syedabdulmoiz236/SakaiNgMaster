import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TechnologySkillsComponent } from './technology-skills.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TechnologySkillsComponent }
	])],
	exports: [RouterModule]
})
export class TechnologySkillsRoutingModule{}
