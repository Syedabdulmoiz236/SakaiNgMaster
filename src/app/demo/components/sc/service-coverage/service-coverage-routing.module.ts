import { ServiceCoverageComponent } from './service-coverage.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ServiceCoverageComponent }
	])],
	exports: [RouterModule]
})
export class ServiceCoverageRoutingModule { }
