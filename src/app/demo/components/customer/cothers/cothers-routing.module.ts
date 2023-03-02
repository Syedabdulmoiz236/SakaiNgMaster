import { CothersComponent } from './cothers.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CothersComponent }
	])],
	exports: [RouterModule]
})
export class COthersRoutingModule { }