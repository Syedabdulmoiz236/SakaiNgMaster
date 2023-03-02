import { SlaComponent } from './sla.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: SlaComponent }
	])],
	exports: [RouterModule]
})
export class SlaRoutingModule { }