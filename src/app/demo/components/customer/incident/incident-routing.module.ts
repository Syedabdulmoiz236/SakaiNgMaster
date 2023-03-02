import { IncidentComponent } from './incident.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: IncidentComponent }
	])],
	exports: [RouterModule]
})
export class IncidentRoutingModule { }