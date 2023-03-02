import { BpComponent } from './bp.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: BpComponent }
	])],
	exports: [RouterModule]
})
export class BpRoutingModule { }
