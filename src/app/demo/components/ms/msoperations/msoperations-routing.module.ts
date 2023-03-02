import { MsoperationsComponent } from './msoperations.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MsoperationsComponent }
	])],
	exports: [RouterModule]
})
export class MsOperationsRoutingModule { }
