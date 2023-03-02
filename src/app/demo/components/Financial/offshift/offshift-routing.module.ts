import { OffshiftComponent } from './offshift.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OffshiftComponent }
	])],
	exports: [RouterModule]
})
export class OffshiftRoutingModule { }
