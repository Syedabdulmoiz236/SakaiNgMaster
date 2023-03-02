import { ResponceComponent } from './responce.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ResponceComponent }
	])],
	exports: [RouterModule]
})
export class ResponceRoutingModule { }