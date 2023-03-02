import { ProjectselectComponent } from './projectselect.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProjectselectComponent }
	])],
	exports: [RouterModule]
})
export class ProjectSelectRoutingModule { }
