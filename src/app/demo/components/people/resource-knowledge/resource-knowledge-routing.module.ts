import { ResourceKnowledgeComponent } from './resource-knowledge.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ResourceKnowledgeComponent }
	])],
	exports: [RouterModule]
})
export class ResourceKnowledgeRoutingModule { }