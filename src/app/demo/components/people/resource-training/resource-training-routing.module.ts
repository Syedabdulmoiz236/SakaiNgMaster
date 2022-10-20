import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResourceTrainingComponent } from './resource-training.component';
@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ResourceTrainingComponent }
	])],
	exports: [RouterModule]
})
export class ResourceTrainingRoutingModule{}
