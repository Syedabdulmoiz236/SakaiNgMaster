import { UtilizationComponent } from './utilization.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: UtilizationComponent }
	])],
	exports: [RouterModule]
})
export class UtilizationRoutingModule { }
