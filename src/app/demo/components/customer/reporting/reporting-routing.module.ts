import { ReportingComponent } from './reporting.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ReportingComponent }
	])],
	exports: [RouterModule]
})
export class ReportingRoutingModule { }